uninstallTagCopying = (() => {
	if (typeof uninstallTagCopying === 'function') uninstallTagCopying();

	const HOVER_CLASS = 'focused-3qFvc8';

	const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

	let running = true
	let addedButtons = [];

	(async () => {
		while (running) {
			await delay(1000);
			for (const copyIDButton of document.querySelectorAll('[id$="devmode-copy-id"]:not([data-r2-processed])')) {
				copyIDButton.dataset.r2Processed = true;
				if (copyIDButton.id.startsWith('message')) continue;

				const copyTagButton = copyIDButton.cloneNode(true);
				copyTagButton.id = copyTagButton.id.replace('copy-id', 'copy-tag');
				copyTagButton.querySelector('[class^="label"]').textContent = 'Copy Tag';
				copyTagButton.querySelector('[class^="iconContainer"]').remove();
				copyTagButton.addEventListener('click', () => {
					const props = copyIDButton.closest('[role="menu"]').parentElement.__reactProps$.children.props.children.props

					let text = ''
					if (copyIDButton.id.startsWith('user')) text = `<@${props.user.id}>`
					else if (copyIDButton.id.startsWith('channel')) text = `<#${props.channel.id}>`
					else if (copyIDButton.id.startsWith('thread')) text = `<#${props.channel.id}>`
					else return console.error('[R2] Unhandled copy tag button:', copyIDButton);

					DiscordNative.clipboard.copy(text);
					window.dispatchEvent(new KeyboardEvent("keydown", { keyCode: 27 }));
				});
				copyTagButton.addEventListener('mouseenter', () => copyTagButton.classList.add(HOVER_CLASS));
				copyTagButton.addEventListener('mouseleave', () => copyTagButton.classList.remove(HOVER_CLASS));
				copyIDButton.parentElement.appendChild(copyTagButton);
				addedButtons.push(copyTagButton);
			}
		}
	})();

	return () => {
		running = false;
		for (const copyTagButton of addedButtons) copyTagButton.remove();
	}
})();