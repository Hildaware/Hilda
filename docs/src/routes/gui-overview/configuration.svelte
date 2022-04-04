<script lang="ts">
    import { base } from '$app/paths';
</script>

<div class="bg-gray-100">
    <div class="flex w-full">
        <div class="w-2/3 px-4">
            <h2 class="pb-4">
                Configuration Overview
            </h2>
            <h5 class="my-2 font-bold">
                <a href="{base}/breakdown/configuration-hierarchy">Understanding Hilda's Configuration Hierarchy</a>
            </h5>
            <ul class="basic-list">
                <li>
                    <strong>1.</strong> Configuration Type - This can be 1 of 3 types (Global, Job, or Set)
                    <ul class="inner-list">
                        <li>
                            Enabled - If the set(s) are shown
                        </li>
                        <li>
                            Disable Enemy Limits - This is temporary (resets back to disabled on logout). Lets you disable the Enemy Count check
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>2.</strong> Visibility - Settings which control when Priority Sets are shown. Sets are always shown in combat
                    <ul class="inner-list">
                        <li>Always - Shown outside of combat, excluding cutscenes, etc.</li>
                        <li>With Weapon Drawn - Show when your weapon is drawn</li>
                        <li>In Instance - Show in duties / instanced content</li>
                    </ul>
                </li>
                <li>
                    <strong>3.</strong> System Settings (Advanced) - Allows fine tuning of settings which modify the way priorities are calculated
                    <ul class="inner-list">
                        <li>Weave Limit - The amount of Weave Actions (Abilities) which will be shown between Weaponskills/Spells</li>
                        <li>Latency Adjustment - Manually adjust the latency to/from the server</li>
                        <li>Ping Offset - TODO</li>
                    </ul>
                </li>
                <li>
                    <strong>4.</strong> Display Settings - Allows visual adjustments to the priority sets shown during combat
                    <ul class="inner-list">
                        <li>Show Weave Icon - Toggles displaying an icon for Weave-able priorities</li>
                        <li>Show Positional Icon - Toggles displaying an icon for priorities with positional damage boosts</li>
                        <li>Show Range Fade - Toggles fading out priorities if your range is too far from the target</li>
                        <li>Window Position - Allows fine tuning the set's position on screen</li>
                        <li>Main Icon Size - Allows fine tuning the size of the first icon to be</li>
                        <li>Secondary Icon Size - Allows fine tuning the size of subsequent icons to be</li>
                        <li>Growth Direction - Which direction the displayed priorities with "grow"</li>
                        <li>Icons Shown - How many icons will be shown. This includes predictions</li>
                        <li>Scale - The scale of the entire set window</li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="w-1/3">
            <img src="{base}/media/screenshots/config-overview.png" alt="hilda-config-overview"/>
        </div>
    </div>
</div>