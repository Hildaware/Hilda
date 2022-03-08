<div class="bg-gray-100">
    <div>
        <h2 class="pb-4">
            Conditions
        </h2>
        <div class="w-full flex">
            <div class="w-2/3">
                <h5>Setting conditions is providing a list of criteria the priority would have to meet for it to show</h5>

                <div class="condition">
                    <h4>Combo Window</h4>
                    <div>
                        <img src="" />
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
                        <img src="" />
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
                        <img src="" />
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
                        <img src="" />
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

            </div>
            <div class="w-1/3">

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