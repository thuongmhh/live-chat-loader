(function () {
	const domain = 'https://beacon-v2.helpscout.net';
	const script = document.currentScript;
	const color = script.dataset.color ?? '#527ceb';
	const icon = script.dataset.icon ?? 'message';
	const zIndex = script.dataset.zIndex ?? '1050';
	const horizontalPosition = script.dataset.horizontalPosition ?? 'right';
	const beaconId = script.dataset.beaconId;

	const createPreconnect = () => {
		var link = document.createElement('link');
		link.rel = 'preconnect';
		link.href = domain;
		link.crossOrigin = '';
		document.head.appendChild(link);
	};
	createPreconnect();

	const getIcon = (icon) => {
		if (icon == 'message')
			return `<svg width="24" height="22" xmlns="http://www.w3.org/2000/svg"><path d="M20.347 20.871l-.003-.05c0 .017.001.034.003.05zm-.243-4.278a2 2 0 0 1 .513-1.455c1.11-1.226 1.383-2.212 1.383-4.74C22 5.782 18.046 2 13.125 2h-2.25C5.954 2 2 5.78 2 10.399c0 4.675 4.01 8.626 8.875 8.626h2.25c.834 0 1.606-.207 3.212-.798a2 2 0 0 1 1.575.083l2.355 1.161-.163-2.878zM10.875 0h2.25C19.13 0 24 4.656 24 10.399c0 2.6-.25 4.257-1.9 6.08l.243 4.279c.072.845-.807 1.471-1.633 1.162l-3.682-1.816c-1.212.446-2.527.921-3.903.921h-2.25C4.869 21.025 0 16.142 0 10.4 0 4.656 4.869 0 10.875 0z" fill="#FFF"/></svg>`;
		if (icon == 'antenna')
			return '<svg width="28" height="26" xmlns="http://www.w3.org/2000/svg"><path d="M14.002 12a3.01 3.01 0 0 0-3.015 3c0 1.654 1.353 3 3.015 3a3.01 3.01 0 0 0 3.014-3c0-1.654-1.353-3-3.014-3m-1.005 7.9c-2.29-.465-4.019-2.485-4.019-4.9 0-2.757 2.254-5 5.024-5s5.023 2.243 5.023 5c0 2.415-1.729 4.435-4.019 4.9V25c0 .552-.45 1-1.004 1a1.003 1.003 0 0 1-1.005-1v-5.1zm9.36-7.345c-.393 0-.768-.232-.928-.617A8.019 8.019 0 0 0 14.001 7a8.018 8.018 0 0 0-7.426 4.936c-.213.51-.8.753-1.314.54a1 1 0 0 1-.543-1.307A10.024 10.024 0 0 1 14 5c4.078 0 7.722 2.422 9.284 6.17a.998.998 0 0 1-.927 1.385M1.005 10.637a1.005 1.005 0 0 1-.928-1.384C2.422 3.632 7.887 0 14.001 0c6.111 0 11.576 3.629 13.922 9.246a.998.998 0 0 1-.542 1.307 1.006 1.006 0 0 1-1.313-.54C24.033 5.146 19.298 2 14.001 2 8.703 2 3.965 5.148 1.933 10.02c-.16.385-.535.617-.928.617" fill="#FFF" fillRule="evenodd"/></svg>';
		if (icon == 'search')
			return '<svg width="23" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.79 15.46C17.184 13.982 18 12.07 18 10a8 8 0 1 0-8 8c1.676 0 3.24-.544 4.578-1.488l.659-.465.554-.588zm6.41 6.326a.999.999 0 0 1-.002 1.412.999.999 0 0 1-1.412.002l-5.095-5.094C14.064 19.256 12.142 19.997 10 20c-5.515.008-10.008-4.485-10-10C.008 4.485 4.485.008 10 0c5.515-.008 10.008 4.485 10 10-.004 2.652-1.105 5-2.794 6.791l4.994 4.995zM14 9c0-1.654-1.346-3-3-3a1 1 0 0 1 0-2c2.757 0 5 2.243 5 5a1 1 0 0 1-2 0z" fill="#FFF"/></svg>';
		if (icon == 'question')
			return '<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52"><path id="a" d="M27.031 32h-2.488v-2.046c0-.635.077-1.21.232-1.72.154-.513.366-.972.639-1.381.272-.41.58-.779.923-1.109.345-.328.694-.652 1.049-.97l.995-.854a6.432 6.432 0 0 0 1.475-1.568c.39-.59.585-1.329.585-2.216 0-.635-.117-1.203-.355-1.703a3.7 3.7 0 0 0-.96-1.263 4.305 4.305 0 0 0-1.401-.783A5.324 5.324 0 0 0 26 16.114c-1.28 0-2.316.375-3.11 1.124-.795.75-1.286 1.705-1.475 2.865L19 19.693c.356-1.772 1.166-3.165 2.434-4.176C22.701 14.507 24.26 14 26.107 14c.947 0 1.842.131 2.682.392.84.262 1.57.648 2.185 1.16a5.652 5.652 0 0 1 1.475 1.892c.368.75.551 1.602.551 2.556 0 .728-.083 1.364-.248 1.909a5.315 5.315 0 0 1-.693 1.467 6.276 6.276 0 0 1-1.048 1.176c-.403.351-.83.71-1.28 1.073-.498.387-.918.738-1.26 1.057a4.698 4.698 0 0 0-.836 1.006 3.847 3.847 0 0 0-.462 1.176c-.095.432-.142.955-.142 1.568V32zM26 37a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" fill="#FFF" fillRule="evenodd"/></svg>';
		if (icon == 'beacon')
			return '<svg width="30" height="30" xmlns="http://www.w3.org/2000/svg"><path d="M26.244 21.523l-4.356-4.355a7.192 7.192 0 0 0 0-4.345l4.356-4.355a12.98 12.98 0 0 1 0 13.055zm-.4 3.215l-1.1 1.1a.557.557 0 0 1-.786 0l-4.884-4.884a7.27 7.27 0 0 0 1.885-1.886l4.885 4.885a.55.55 0 0 1 0 .785zM8.471 26.236l4.355-4.354a7.197 7.197 0 0 0 4.347 0l4.355 4.354a12.983 12.983 0 0 1-13.057 0zm-2.43-.398a.556.556 0 0 1-.786 0l-1.1-1.1a.556.556 0 0 1 0-.786l4.884-4.884a7.275 7.275 0 0 0 1.887 1.886L6.04 25.838zm-2.285-4.315a12.98 12.98 0 0 1 0-13.055l4.355 4.354a7.192 7.192 0 0 0 0 4.347l-4.355 4.354zm.399-16.27l1.1-1.1a.554.554 0 0 1 .785 0l4.886 4.884a7.27 7.27 0 0 0-1.887 1.885L4.155 6.039a.556.556 0 0 1 0-.786zm17.373-1.5l-4.355 4.355a7.229 7.229 0 0 0-4.347 0L8.471 3.754a12.99 12.99 0 0 1 13.057 0zm-1.305 11.242A5.228 5.228 0 0 1 15 20.217a5.228 5.228 0 0 1-5.224-5.222A5.228 5.228 0 0 1 15 9.773a5.23 5.23 0 0 1 5.223 5.222zm3.735-10.842a.556.556 0 0 1 .786 0l1.1 1.1a.553.553 0 0 1 0 .786l-4.884 4.883a7.302 7.302 0 0 0-1.886-1.885l4.884-4.884zm3.688 2.786c.23-.39.362-.83.362-1.293 0-.683-.266-1.325-.75-1.807l-1.098-1.1a2.555 2.555 0 0 0-3.101-.387 14.985 14.985 0 0 0-16.125.004c-.973-.548-2.284-.426-3.093.383l-1.101 1.1a2.533 2.533 0 0 0-.387 3.1 14.97 14.97 0 0 0 0 16.114 2.553 2.553 0 0 0 .387 3.099l1.1 1.1A2.549 2.549 0 0 0 5.649 28a2.55 2.55 0 0 0 1.293-.361A14.961 14.961 0 0 0 15 30.002a14.97 14.97 0 0 0 8.059-2.363c.398.234.844.36 1.292.36.655 0 1.31-.25 1.809-.747l1.099-1.1a2.531 2.531 0 0 0 .387-3.1 14.963 14.963 0 0 0 0-16.113z" fill="#FFF" fillRule="evenodd"/></svg>';

		// default to close icon
		return '<svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M13.707.293a.999.999 0 0 0-1.414 0L7 5.586 1.707.293A.999.999 0 1 0 .293 1.707L5.586 7 .293 12.293a.999.999 0 1 0 1.414 1.414L7 8.414l5.293 5.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L8.414 7l5.293-5.293a.999.999 0 0 0 0-1.414" fill="#FFF" fillRule="evenodd"/></svg>';
	};

	const createComponent = () => {
		const template = document.createElement('template');
		template.innerHTML = `<div class="live-chat-loader-placeholder" style="border-radius:55px;height:60px;width:60px;bottom:40px;box-shadow:rgba(0,0,0,.1) 0 4px 7px;position:fixed;right:40px;top:auto;border-style:none;transition:box-shadow 250ms ease 0s,opacity .4s ease 0s,transform .2s ease-in-out 0s;z-index:${Number(
			zIndex
		)};"><button title="Load Chat" type="button" role="button" arial-label="Load Chat" aria-busy="true" aria-live="polite" style="background-color:${color};appearance:none;align-items:center;bottom:0;display:block;justify-content:center;position:relative;user-select:none;z-index:999;color:#fff;cursor:pointer;min-width:60px;-webkit-tap-highlight-color:transparent;height:60px;line-height:60px;border-radius:120px;margin:0;outline:0;padding:0;border-style:none;transition:background-color .2s linear 0s,transform .2s linear 0s"><span style="align-items:center;color:#fff;cursor:pointer;display:flex;height:100%;-webkit-box-pack:center;justify-content:center;pointer-events:none;position:absolute;text-indent:-99999px;top:0;width:60px;will-change:opacity,transform;left:auto;right:0;opacity:1!important;transition:opacity 80ms linear 0s,transform 160ms linear 0s;">${getIcon(
			icon
		)}</span><span style="-webkit-box-align:center;align-items:center;color:#fff;cursor:pointer;display:flex;height:100%;-webkit-box-pack:center;justify-content:center;pointer-events:none;position:absolute;text-indent:-99999px;top:0;width:60px;will-change:opacity,transform;left:auto;right:0;transition:opacity 80ms linear 0s,transform 160ms linear 0s;opacity:0;">${getIcon(
			'close'
		)}</span></button></div>`;

		const component = template.content.children[0];
		const button = component.querySelector('button');
		button.onclick = () => window.loadChat(true);
		button.onmouseenter = () => window.loadChat(false);
		const chatButton = component.querySelector('button span:first-child');
		const closeButton = component.querySelector('button span:last-child');
		return { component, chatButton, closeButton };
	};

	const { component, chatButton, closeButton } = createComponent();

	const handleResize = () => {
		const windowHeight = window.innerHeight;
		component.style.bottom = windowHeight <= 740 ? '10px' : '40px';
		component.style.right =
			horizontalPosition === 'left'
				? 'auto'
				: windowHeight <= 740
				? '20px'
				: '40px';
		component.style.left =
			horizontalPosition === 'right'
				? 'auto'
				: windowHeight <= 740
				? '20px'
				: '40px';
	};
	handleResize();
	window.addEventListener('resize', handleResize);

	const setState = (state) => {
		if (state == 'complete') {
			window.removeEventListener('resize', handleResize);
			document.body.removeChild(component);
			return;
		}

		chatButton.style.transform =
			state === 'initial'
				? 'rotate(0deg) scale(1)'
				: 'rotate(30deg) scale(0)';

		closeButton.style.opacity = state === 'initial' ? 0 : 1;

		closeButton.style.transform =
			state === 'initial'
				? 'rotate(30deg) scale(0)'
				: 'rotate(0deg) scale(1)';
	};
	setState('initial');

	const loadScript = () => {
		if (window.Beacon) return false;
		(function (e, t, n) {
			function a() {
				const e = t.getElementsByTagName('script')[0],
					n = t.createElement('script');
				(n.async = !0),
					(n.src = domain),
					e.parentNode?.insertBefore(n, e);
			}
			if (
				((e.Beacon = n =
					function (t, n, a) {
						e.Beacon.readyQueue.push({
							method: t,
							options: n,
							data: a,
						});
					}),
				(n.readyQueue = []),
				'complete' === t.readyState)
			)
				return a();
			e.attachEvent
				? e.attachEvent('onload', a)
				: e.addEventListener('load', a, !1);
		})(window, document, window.Beacon || function () {});

		return true;
	};

	const load = () => {
		const loaded = loadScript();

		if (loaded) {
			window.Beacon('init', beaconId);
			window.Beacon('once', 'ready', () => {
				// Allow helpscout to complete loading before removing fake widget
				setTimeout(() => {
					setState('complete');
				}, 2000);
			});
		}

		return loaded;
	};

	window.loadChat = (open) => {
		load();
		if (open) window.Beacon('open');
	};

	document.body.appendChild(component);
})();
  
