<script lang="ts">
    import { base } from '$app/paths';
</script>

<div class="bg-gray-100">
    <div>
        <h2 class="pb-4">
            Conditions
        </h2>
        <div class="w-full">
            <h5>Setting conditions is providing a list of criteria the priority would have to meet for it to show</h5>

            <div class="condition">
                <h4>Combo Window</h4>
                <div>
                    <img src="{base}/media/screenshots/ph.png" />
                    <p>What it Does</p>
                    <small>
                        Display this Priority when it's in/out of a combo possibly being executed
                    </small>
                    <p>Example</p>
                    <small>
                        PLD: <a href="https://ffxiv.gamerescape.com/wiki/Fast_Blade" target="_blank"> Fast Blade </a> ->
                        <a href="https://ffxiv.gamerescape.com/wiki/Riot_Blade" target="_blank">Riot Blade</a> ->
                        <a href="https://ffxiv.gamerescape.com/wiki/Royal_Authority" target="_blank">Royal Authority</a>
                    </small>
                    <br>
                    <small>
                        Riot Blade combos off Fast Blade, therefore Riot Blade would need its Combo Window set to
                        "Active"
                    </small>
                </div>
            </div>

            <div class="condition">
                <h4>Weave Window</h4>
                <div>
                    <img src="{base}/media/screenshots/ph.png" />
                    <p>What it Does</p>
                    <small>
                        Display this Priority when it's in/out of the GCD Window
                    </small>
                    <p>Example</p>
                    <small>
                        PLD Ability: <a href="https://ffxiv.gamerescape.com/wiki/Spirits_Within" target="_blank">Spirits Within</a>
                    </small>
                    <br>
                    <small>
                        Between weapons skill uses, you want to weave actions to maximize throughput, therefore set
                        the Weave Window to "Active"
                    </small>
                </div>
            </div>

            <div class="condition">
                <h4>Charges</h4>
                <div>
                    <img src="{base}/media/screenshots/ph.png" />
                    <p>What it Does</p>
                    <small>
                        Display this Priority when it meets the criteria of the supplied charge count
                    </small>
                    <p>Example</p>
                    <small>
                        MNK: <a href="https://ffxiv.gamerescape.com/wiki/Perfect_Balance" target="_blank">Perfect Balance</a>
                    </small>
                    <br>
                    <small>
                        Setting this value to "Equals" "1" would allow this priority to become active when you only
                        have a single charge of the action
                    </small>
                </div>
            </div>

            <div class="condition">
                <h4>Depends on Action Recast</h4>
                <div>
                    <img src="{base}/media/screenshots/ph.png" />
                    <p>What it Does</p>
                    <small>
                        Display this Priority when the criteria is met for the supplied Action & Recast Time
                    </small>
                    <p>Example</p>
                    <small>
                        MNK: <a href="https://ffxiv.gamerescape.com/wiki/Perfect_Balance" target="_blank">Perfect Balance</a>
                        reliance upon <a href="https://ffxiv.gamerescape.com/wiki/Riddle_of_Fire" target="_blank">Riddle of Fire</a>
                    </small>
                    <br>
                    <small>
                        Setting this value on Perfect Balance to depend on the recast of Riddle of Fire with a value of
                        "0" will allow the Perfect Balance condition to be met when Riddle of Fire is usable
                    </small>
                </div>
            </div>

            <div class="condition">
                <h4>Depends on Action Recast</h4>
                <div>
                    <img src="{base}/media/screenshots/ph.png" />
                    <p>What it Does</p>
                    <small>
                        Display this Priority when the criteria is met for the supplied Action & Recast Time
                    </small>
                    <p>Example</p>
                    <small>
                        MNK: <a href="https://ffxiv.gamerescape.com/wiki/Perfect_Balance" target="_blank">Perfect Balance</a>
                        reliance upon <a href="https://ffxiv.gamerescape.com/wiki/Riddle_of_Fire" target="_blank">Riddle of Fire</a>
                    </small>
                    <br>
                    <small>
                        Setting this value on Perfect Balance to depend on the recast of Riddle of Fire with a value of
                        "0" will allow the Perfect Balance condition to be met when Riddle of Fire is usable
                    </small>
                </div>
            </div>

            <div class="condition">
                <h4>Enemy Count</h4>
                <div>
                    <img src="{base}/media/screenshots/ph.png" />
                    <p>What it Does</p>
                    <small>
                        Display this Priority when the criteria is met for the supplied number of enemies in the Enemy List
                    </small>
                    <p>Example</p>
                    <small>
                        Setting this value to "Greater Than or Equal To" 3 will allow the condition to be met with 3+
                        enemies in the Enemy List
                    </small>
                </div>
            </div>

            <div class="condition">
                <h4>Player</h4>
                <div>
                    <img src="{base}/media/screenshots/ph.png" />
                    <p>What it Does</p>
                    <ul class="inner-list">
                        <li>
                            <h5>Level</h5>
                            <small>
                                Display this Priority when the criteria is met for the player's current level
                            </small>
                            <p>Example</p>
                            <small>
                                Setting this value to "Greater Than or Equal To" 72 will allow the condition to be met with the
                                player's level is 72+
                            </small>
                        </li>
                        <li>
                            <h5>Mana Points</h5>
                            <small>
                                Display this Priority when the criteria is met for the player's current mana
                            </small>
                            <p>Example</p>
                            <small>
                                Setting this value to "Greater Than or Equal To" 8000 will allow the condition to be met with the
                                player's current MP is 8000+
                            </small>
                        </li>
                        <li>
                            <h5>Statuses</h5>
                            <small>
                                Display this Priority when the criteria is met if the status(s) are active / inactive on the player
                            </small>
                            <p>Example</p>
                            <small>
                                Adding a status condition providing the status ID + active will allow the condition to be met
                                when the player gains that status
                            </small>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="condition">
                <h4>Target</h4>
                <div>
                    <img src="{base}/media/screenshots/ph.png" />
                    <p>What it Does</p>
                    <ul class="inner-list">
                        <li>
                            <h5>Is a Boss</h5>
                            <small>
                                Display this Priority when the criteria is met if the player is / is not a "Boss"
                            </small>
                            <p>Example</p>
                            <small>
                                Setting this value to true means the condition will only be met when targeting a "Boss"
                            </small>
                        </li>
                        <li>
                            <h5>Statuses</h5>
                            <small>
                                Display this Priority when the criteria is met if the status(s) are active / inactive on the target
                            </small>
                            <p>Example</p>
                            <small>
                                Adding a status condition providing the status ID + active will allow the condition to be met
                                when the target gains that status
                            </small>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="condition">
                <h4>Job</h4>
                <div>
                    <img src="{base}/media/screenshots/ph.png" />
                    <p>What it Does</p>
                    <small>
                        Provides access to Job Gauge / Job Specific conditions
                    </small>
                </div>
            </div>

        </div>
    </div>
</div>

<style>
    .condition > div {
        @apply ml-4;
    }

    .condition > div > p {
        @apply font-bold;
    }

    .condition > div > small {
        @apply ml-4;
    }

</style>