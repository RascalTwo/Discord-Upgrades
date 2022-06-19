/**
 * Allow the guild navigation & sidebar to be toggled/moved.
 *
 * Right click on the close buttons to toggle side.
 */
uninstallSidebarControls = (() => {
	if (typeof uninstallSidebarControls === 'function') uninstallSidebarControls();


	const handleGuildNavToggle = () => {
		if (document.querySelector('[data-list-id="guildsnav"]').parentElement.style.display) {
			document.querySelector('[data-list-id="guildsnav"]').parentElement.style.display = '';
			openGuildNav.style.display = 'none';
		} else {
			document.querySelector('[data-list-id="guildsnav"]').parentElement.style.display = 'none';
			openGuildNav.style.display = '';
		}
	}

	const toggleGuildNavSide = () => {
		const parent = document.querySelector('[data-list-id="guildsnav"]').parentElement.parentElement;
		if (parent.style.direction === 'rtl') {
			parent.style.direction = 'ltr';
		} else {
			parent.style.direction = 'rtl';
		}

		for (const child of parent.children) {
			child.style.direction = 'ltr';
		}
	}

	const closeGuildNav = document.createElement('button')
	closeGuildNav.id = 'close-guild-nav'
	closeGuildNav.className = 'nav-toggle'
	closeGuildNav.textContent = 'Close';
	closeGuildNav.title = 'Close Guild Navigation';
	closeGuildNav.addEventListener('click', handleGuildNavToggle)
	closeGuildNav.addEventListener('contextmenu', toggleGuildNavSide)
	document.querySelector('[data-list-id="guildsnav"]').parentElement.insertBefore(closeGuildNav, document.querySelector('[data-list-id="guildsnav"]').parentElement.firstChild);

	const openGuildNav = document.createElement('button')
	openGuildNav.id = 'open-guild-nav';
	openGuildNav.className = 'nav-toggle';
	openGuildNav.textContent = 'Open';
	openGuildNav.title = 'Open Guild Navigation';
	openGuildNav.addEventListener('click', handleGuildNavToggle)
	openGuildNav.style.display = 'none';
	document.body.appendChild(openGuildNav);


	const handleSidebarToggle = () => {
		if (document.querySelector('[class^="sidebar"]').style.display) {
			document.querySelector('[class^="sidebar"]').style.display = '';
			openSidebar.style.display = 'none';
		} else {
			document.querySelector('[class^="sidebar"]').style.display = 'none';
			openSidebar.style.display = '';
		}
	}

	const toggleSidebarSide = () => {
		const parent = document.querySelector('[class^="sidebar"]').parentElement;
		if (parent.style.direction === 'rtl') {
			parent.style.direction = 'ltr';
		} else {
			parent.style.direction = 'rtl';
		}

		for (const child of parent.children) {
			child.style.direction = 'ltr';
		}
	}

	const closeSidebar = document.createElement('button')
	closeSidebar.id = 'close-sidebar'
	closeSidebar.className = 'nav-toggle'
	closeSidebar.textContent = 'Close';
	closeSidebar.title = 'Close Sidebar';
	closeSidebar.addEventListener('click', handleSidebarToggle);
	closeSidebar.addEventListener('contextmenu', toggleSidebarSide);
	document.querySelector('[class^="sidebar"]').insertBefore(closeSidebar, document.querySelector('[class^="sidebar"]').firstChild);

	const openSidebar = document.createElement('button')
	openSidebar.id = 'open-sidebar';
	openSidebar.className = 'nav-toggle';
	openSidebar.textContent = 'Open';
	openSidebar.title = 'Open Sidebar';
	openSidebar.addEventListener('click', handleSidebarToggle)
	openSidebar.style.display = 'none';
	document.body.appendChild(openSidebar);

	const css = document.createElement('style');
	css.innerHTML = `
		.nav-toggle {
			color: var(--white-500);
			background-color: var(--brand-experiment);
			border-radius: 3px;
			padding: 2px 16px;
			font-size: 14px;
			font-weight: 500;
			line-height: 16px;
		}
		.nav-toggle[id^="open"] {
			position: absolute;
			top: 0;
			left: 0;
			z-index: 9001;
		}
		`;
	document.head.appendChild(css);

	return () => {
		closeGuildNav.remove();
		openGuildNav.remove();

		closeSidebar.remove();
		openSidebar.remove();

		css.remove();
	}
})();