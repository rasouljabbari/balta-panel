import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { deleteCookie, getCookie, setCookie } from '../cookies';

describe('cookies', () => {
  beforeEach(() => {
    // Clear all cookies before each test
    document.cookie.split(';').forEach((cookie) => {
      const eqPos = cookie.indexOf('=');
      const name =
        eqPos > -1 ? cookie.substring(0, eqPos).trim() : cookie.trim();
      if (name) {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      }
    });
  });

  afterEach(() => {
    // Clear all cookies after each test
    document.cookie.split(';').forEach((cookie) => {
      const eqPos = cookie.indexOf('=');
      const name =
        eqPos > -1 ? cookie.substring(0, eqPos).trim() : cookie.trim();
      if (name) {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      }
    });
  });

  describe('setCookie', () => {
    it('should set a cookie without expiration', () => {
      setCookie('testCookie', 'testValue');

      // document.cookie only returns name=value pairs, not attributes
      expect(document.cookie).toContain('testCookie=testValue');
      // Verify we can retrieve it
      expect(getCookie('testCookie')).toBe('testValue');
    });

    it('should set a cookie with expiration', () => {
      const seconds = 3600; // 1 hour

      setCookie('testCookie', 'testValue', seconds);

      // Verify the cookie was set and can be retrieved
      const cookieValue = getCookie('testCookie');
      expect(cookieValue).toBe('testValue');
    });

    it('should set a cookie with zero seconds expiration (immediately expires)', () => {
      setCookie('testCookie', 'testValue', 0);

      // Cookie with 0 seconds expires immediately, so it won't be retrievable
      expect(getCookie('testCookie')).toBeUndefined();
    });

    it('should set a cookie with special characters in value', () => {
      setCookie('testCookie', 'value with spaces & special chars!@#');

      const cookieValue = getCookie('testCookie');
      expect(cookieValue).toBe('value with spaces & special chars!@#');
    });

    it('should set a cookie with empty value', () => {
      setCookie('emptyCookie', '');

      expect(document.cookie).toContain('emptyCookie=');
      const cookieValue = getCookie('emptyCookie');
      expect(cookieValue).toBe('');
    });

    it('should overwrite existing cookie with same name', () => {
      setCookie('testCookie', 'oldValue');
      setCookie('testCookie', 'newValue');

      const cookieValue = getCookie('testCookie');
      expect(cookieValue).toBe('newValue');
    });

    it('should set multiple different cookies', () => {
      setCookie('cookie1', 'value1');
      setCookie('cookie2', 'value2');
      setCookie('cookie3', 'value3');

      expect(getCookie('cookie1')).toBe('value1');
      expect(getCookie('cookie2')).toBe('value2');
      expect(getCookie('cookie3')).toBe('value3');
    });

    it('should set cookie with numeric value as string', () => {
      setCookie('numericCookie', '123');

      const cookieValue = getCookie('numericCookie');
      expect(cookieValue).toBe('123');
    });
  });

  describe('getCookie', () => {
    it('should get an existing cookie', () => {
      setCookie('testCookie', 'testValue');

      const value = getCookie('testCookie');

      expect(value).toBe('testValue');
    });

    it('should return undefined for non-existent cookie', () => {
      const value = getCookie('nonExistentCookie');

      expect(value).toBeUndefined();
    });

    it('should get cookie value when multiple cookies exist', () => {
      setCookie('cookie1', 'value1');
      setCookie('cookie2', 'value2');
      setCookie('cookie3', 'value3');

      expect(getCookie('cookie1')).toBe('value1');
      expect(getCookie('cookie2')).toBe('value2');
      expect(getCookie('cookie3')).toBe('value3');
    });

    it('should handle cookies with spaces in value', () => {
      setCookie('spacedCookie', 'value with spaces');

      const value = getCookie('spacedCookie');
      expect(value).toBe('value with spaces');
    });

    it('should handle cookies with leading spaces in cookie string', () => {
      // Simulate cookie string with leading spaces (browser behavior)
      document.cookie = ' testCookie=testValue; path=/';

      const value = getCookie('testCookie');
      expect(value).toBe('testValue');
    });

    it('should return empty string for cookie with empty value', () => {
      setCookie('emptyCookie', '');

      const value = getCookie('emptyCookie');
      expect(value).toBe('');
    });

    it('should handle cookie names that are substrings of other cookie names', () => {
      setCookie('test', 'value1');
      setCookie('testCookie', 'value2');

      expect(getCookie('test')).toBe('value1');
      expect(getCookie('testCookie')).toBe('value2');
    });

    it('should handle special characters in cookie value', () => {
      // Note: semicolons in cookie values are problematic as they're used as delimiters
      // This test uses characters that are safe in cookie values
      const specialValue = 'value&with=special-chars';
      setCookie('specialCookie', specialValue);

      const value = getCookie('specialCookie');
      expect(value).toBe(specialValue);
    });

    it('should be case-sensitive for cookie name', () => {
      setCookie('TestCookie', 'value1');
      setCookie('testcookie', 'value2');

      expect(getCookie('TestCookie')).toBe('value1');
      expect(getCookie('testcookie')).toBe('value2');
      expect(getCookie('TestCOOKIE')).toBeUndefined();
    });
  });

  describe('deleteCookie', () => {
    it('should delete an existing cookie', () => {
      setCookie('testCookie', 'testValue');
      expect(getCookie('testCookie')).toBe('testValue');

      deleteCookie('testCookie');

      expect(getCookie('testCookie')).toBeUndefined();
    });

    it('should not throw error when deleting non-existent cookie', () => {
      expect(() => deleteCookie('nonExistentCookie')).not.toThrow();
      expect(getCookie('nonExistentCookie')).toBeUndefined();
    });

    it('should delete only the specified cookie when multiple cookies exist', () => {
      setCookie('cookie1', 'value1');
      setCookie('cookie2', 'value2');
      setCookie('cookie3', 'value3');

      deleteCookie('cookie2');

      expect(getCookie('cookie1')).toBe('value1');
      expect(getCookie('cookie2')).toBeUndefined();
      expect(getCookie('cookie3')).toBe('value3');
    });

    it('should set cookie with expired date when deleting', () => {
      setCookie('testCookie', 'testValue');
      expect(getCookie('testCookie')).toBe('testValue');

      deleteCookie('testCookie');

      // Verify the cookie is no longer retrievable
      expect(getCookie('testCookie')).toBeUndefined();
    });

    it('should handle deleting cookie with special characters in name', () => {
      setCookie('test-cookie', 'value');
      expect(getCookie('test-cookie')).toBe('value');

      deleteCookie('test-cookie');
      expect(getCookie('test-cookie')).toBeUndefined();
    });
  });

  describe('integration tests', () => {
    it('should set, get, and delete a cookie in sequence', () => {
      // Set
      setCookie('integrationCookie', 'integrationValue');
      expect(getCookie('integrationCookie')).toBe('integrationValue');

      // Update
      setCookie('integrationCookie', 'updatedValue');
      expect(getCookie('integrationCookie')).toBe('updatedValue');

      // Delete
      deleteCookie('integrationCookie');
      expect(getCookie('integrationCookie')).toBeUndefined();
    });

    it('should handle multiple operations on different cookies', () => {
      setCookie('cookie1', 'value1');
      setCookie('cookie2', 'value2');

      expect(getCookie('cookie1')).toBe('value1');
      expect(getCookie('cookie2')).toBe('value2');

      deleteCookie('cookie1');
      setCookie('cookie3', 'value3');

      expect(getCookie('cookie1')).toBeUndefined();
      expect(getCookie('cookie2')).toBe('value2');
      expect(getCookie('cookie3')).toBe('value3');
    });

    it('should handle setting cookie with expiration and then getting it', () => {
      const seconds = 86400; // 24 hours
      setCookie('expiringCookie', 'expiringValue', seconds);

      const value = getCookie('expiringCookie');
      expect(value).toBe('expiringValue');
    });
  });
});
