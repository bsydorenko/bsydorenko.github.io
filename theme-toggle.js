/*
 * Theme toggle module.
 * Separated from HTML for maintainability and easier unit testing.
 */
(function () {
	"use strict";

	var STORAGE_KEY = "site-theme";
	var THEME_DARK = "dark";
	var THEME_LIGHT = "light";

	function normalizeTheme(value) {
		return value === THEME_DARK || value === THEME_LIGHT ? value : null;
	}

	function getStoredTheme(storage) {
		try {
			return normalizeTheme(storage.getItem(STORAGE_KEY));
		} catch (_error) {
			// Storage can throw in privacy-restricted environments.
			return null;
		}
	}

	function saveTheme(storage, theme) {
		try {
			storage.setItem(STORAGE_KEY, theme);
		} catch (_error) {
			// Non-fatal: app should still work without persistence.
		}
	}

	function getPreferredTheme(win) {
		if (typeof win.matchMedia !== "function") {
			return THEME_LIGHT;
		}

		return win.matchMedia("(prefers-color-scheme: dark)").matches
			? THEME_DARK
			: THEME_LIGHT;
	}

	function applyTheme(root, toggle, theme) {
		var labelNode = toggle.querySelector(".theme-fab__label");
		root.setAttribute("data-theme", theme);
		if (labelNode) {
			labelNode.textContent = theme === THEME_DARK ? "Light" : "Dark";
		}
		toggle.setAttribute(
			"title",
			theme === THEME_DARK ? "Switch to light theme" : "Switch to dark theme",
		);
		toggle.setAttribute("aria-pressed", theme === THEME_DARK ? "true" : "false");
	}

	function initThemeToggle(doc, win) {
		var root = doc.documentElement;
		var toggle = doc.getElementById("theme-toggle");
		if (!toggle) {
			return;
		}

		var storedTheme = getStoredTheme(win.localStorage);
		var currentTheme = storedTheme || getPreferredTheme(win);
		applyTheme(root, toggle, currentTheme);

		toggle.addEventListener("click", function () {
			currentTheme = currentTheme === THEME_DARK ? THEME_LIGHT : THEME_DARK;
			applyTheme(root, toggle, currentTheme);
			saveTheme(win.localStorage, currentTheme);
		});
	}

	// Expose pure helpers for lightweight tests.
	var themeToggleTestApi = {
		normalizeTheme: normalizeTheme,
		getPreferredTheme: getPreferredTheme,
	};
	window.__themeToggle = themeToggleTestApi;

	initThemeToggle(document, window);
})();
