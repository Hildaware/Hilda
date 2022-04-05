<script>
	import '../style.css';
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Hilda - Documentation</title>
	<html lang="en" />
</svelte:head>

<div class="fixed h-12 w-full bg-gray-700 flex items-center z-20">
	<a href="{base}/" class="h12 w-12">
		<img src="{base}/media/icon.png" alt="hilda-logo" />
	</a>
    <div>
        <p class="text-2xl pl-4 text-white">
            Hilda - Documentation
        </p>
    </div>
</div>

<div class="h-full w-64 fixed z-10 overflow-x-hidden bg-gray-200 p-4 pt-16">
	<ul>
		<li>
			<a class="font-bold text-xl text-black" href="{base}/getting-started">Getting Started</a>
		</li>
		<li>
			<a class="text-black font-bold" href="{base}/quick-start-guide">Quick Start Guide</a>
		</li>

		<li>
			<a class="text-black font-bold" href="{base}/gui-overview/">GUI Overview</a>
			<ul class="ml-4">
				<li>
					<a class="text-black" href="{base}/gui-overview/">+ Main Window</a>
					<ul class="ml-4">
						<li>
							<a class="text-black" href="{base}/gui-overview/set-overview">- Priority Set</a>
						</li>
						<li>
							<a class="text-black" href="{base}/gui-overview/priority-overview">- Priority</a>
						</li>
					</ul>
				</li>
				<li>
					<a class="text-black" href="{base}/gui-overview/configuration">+ Configuration</a>
				</li>
			</ul>
		</li>
		<li>
			<a class="text-black font-bold" href="{base}/breakdown/">Features Breakdowns</a>
			<ul class="ml-4">
				<li>
					<a class="text-black" href="{base}/breakdown/conditions">+ Conditions</a>
				</li>
				<li>
					<a class="text-black" href="{base}/breakdown/configuration-hierarchy">+ Configuration Hierarchy</a>
				</li>
			</ul>
		</li>
	</ul>
	<div>

	</div>
	<div>

	</div>
</div>

<div class="body-container absolute left-64 top-12 p-4 overflow-x-hidden">
	<slot />
</div>

<style>
	.body-container {
		width: calc(100% - 16rem);
	}
</style>
