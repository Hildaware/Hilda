<div class="bg-gray-100">
    <div>
        <h2 class="pb-4">
            Configuration Hierarchy
        </h2>
        <div class="w-full flex">
            <div class="w-1/2">
                <h4>Configuration Levels</h4>
                <ul class="list-disc pl-6">
                    <li>Global</li>
                    <li>Job</li>
                    <li>Set</li>
                </ul>

                <h4>Each Setting is Individual of its Configuration Level</h4>
                <div class="ml-4">
                    <p>
                        This means each setting stands alone outside of its configuration level. Changing a single setting
                        does not force the entire configuration to fall down the hierarchy.
                    </p>
                </div>

                <h4>Settings "Fall" Down</h4>
                <div class="ml-4">
                    <p class="font-bold">Example:</p>
                    <p>
                        I want every Priority Set to show when I'm in a duty - even outside of combat. So within the global
                        configuration, I set the checkbox for "In Instance".
                    </p>
                    <p class="font-bold">Result:</p>
                    <p>
                        Now every single job & set configuration will hold that value, therefore each set will show while
                        I'm inside a duty.
                    </p>
                </div>

                <h4>Fine Tuning</h4>
                <div class="ml-4">
                    <p class="font-bold">Example:</p>
                    <p>Continuing the previous example, let's say I don't want WHM sets to show while in a Duty. Within the WHM
                        job configuration, I would disable the "In Instance" setting.</p>
                    <p class="font-bold">Result:</p>
                    <p>
                        Now each WHM set will NOT show while in a Duty.
                    </p>
                    <p>But what if I wanted the Single Target set to show within a Duty only? No problem, just enter that set's
                        configuration and set the checkbox for "In Instance"</p>
                    <p class="font-bold">Result:</p>
                    <p>
                        Now that set will be shown while in a Duty, and other WHM sets will still use the setting from the job's
                        configuration
                    </p>
                </div>
            </div>
            <div class="w-1/2">
                <div class="tf-tree">
                    <ul>
                        <li>
                            <span class="tf-nc">Global</span>
                            <ul>
                                <li>
                                    <span class="tf-nc">RDM</span>
                                    <ul>
                                        <li><span class="tf-nc">Single Target</span></li>
                                        <li><span class="tf-nc">Multi Target</span></li>
                                        <li><span class="tf-nc">Custom Set</span></li>
                                    </ul>
                                </li>
                                <li>
                                    <span class="tf-nc">PLD</span>
                                    <ul>
                                        <li><span class="tf-nc">Single Target</span></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>