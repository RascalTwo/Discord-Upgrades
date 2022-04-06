/**
 * Continually open and close the inbox to refresh it - as keeping it open doesn't allow new messages to be seen
 */
uninstallInboxRefresher = ((rate = 1000) => {
	if (typeof uninstallInboxRefresher === 'function') uninstallInboxRefresher();

	const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
	let running = true;

	(async () => {
		while (running) {
			if (document.querySelector('[aria-label="Inbox"][role="dialog"]')?.textContent.includes("You're all caught up")) {
				const button = document.querySelector('[aria-label="Channel header"] [aria-label="Inbox"]')
				button.click();
				await delay(rate);
				button.click();
			}
			await delay(rate);
		}
	})();

	return () => running = false;
})();