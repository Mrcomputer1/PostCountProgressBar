<script>
    import Modal from '../components/Modal.svelte';
    import TextInputField from '../components/TextInputField.svelte';
    import Button from '../components/Button.svelte';

    import {progressBarConfigStore, modalStore} from '../stores';

    import { formatMsg } from '../i18n';
    import Msg from '../components/Msg.svelte';

    import {LINK_CLASS} from '../common-styles';

    const USERNAME_REGEX = /^[\w-]{3,20}$/;

    let username = "ScratchCat";
    let working = false;

    function findGoal(postCount){
        let len = postCount.toString().length;

        let goal = parseInt("1".padEnd(len, "0")) * 5;
        if(goal <= postCount){
            goal *= 2;
        }

        return goal;
    }

    async function findPostCount(){
        if(!USERNAME_REGEX.test(username)){
            alert(formatMsg("modals.count-finder.errors.username-invalid", "Your username is not valid."));
            return;
        }

        working = true;
    
        try{
            let res = await fetch("https://scratchdb.lefty.one/v3/forum/user/info/" + username);
            if(res.status === 400){
                alert(formatMsg("modals.count-finder.errors.username-invalid", "Your username is not valid."));
            }else if(res.status === 404){
                alert(formatMsg("modals.count-finder.errors.username-not-exist", "This username does not exist."));
            }

            if(res.status !== 200){
                working = false;
            }

            res = await res.json();
            
            $progressBarConfigStore.posts = res.counts.total.count;
            $progressBarConfigStore.total = findGoal(res.counts.total.count);

            $modalStore = null;
        }catch(e){
            alert(formatMsg("generic.error", "Something went wrong! {e}", {e: e.toString()}));
            console.error(e);
        }finally{
            working = false;
        }
    }
</script>

<Modal nameId="modals.count-finder.title" name="Find your post count">
    <details open>
        <summary class="cursor-pointer"><Msg id="modals.count-finder.automatic" defaultMessage="Automatically (via ScratchDB)" /></summary>
        <TextInputField id="username" required bind:value={username}>
            <Msg id="modals.count-finder.automatic.username" defaultMessage="Scratch Username" />
        </TextInputField>

        <div class="flex pt-2 w-1/2 mx-auto">
            <Button on:click={findPostCount} working={working} disabled={working}>
                <Msg id="modals.count-finder.automatic.submit-btn" defaultMessage="Find Post Count" />
            </Button>
        </div>
    </details>
    <details>
        <summary class="cursor-pointer"><Msg id="modals.count-finder.manual" defaultMessage="Manually" /></summary>
        <ol class="list-decimal list-inside">
            <li>
                <Msg id="modals.count-finder.manual.steps.1" defaultMessage="Visit the <link>Scratch Discussion Forums</link>."
                    values={{
                        link: text => {
                            return {
                                tag: "a",
                                attrs: {
                                    href: "https://scratch.mit.edu/discuss",
                                    class: LINK_CLASS,
                                    target: "_blank"
                                },
                                body: text
                            }
                        }
                    }}
                />
            </li>
            <li>
                <Msg id="modals.count-finder.manual.steps.2" defaultMessage='Near the bottom of the page, find "Show your topics/posts", click "<link>posts</link>".'
                    values={{
                        link: text => {
                            return {
                                tag: "a",
                                attrs: {
                                    href: "https://scratch.mit.edu/discuss/search/?action=show_user&show_as=posts",
                                    class: LINK_CLASS,
                                    target: "_blank"
                                },
                                body: text
                            }
                        }
                    }}
                />
            </li>
            <li>
                <Msg id="modals.count-finder.manual.steps.3" defaultMessage={"At the top, you will see \"Found '<number> posts.\", the number is your post count."} />
            </li>
        </ol>
    </details>
</Modal>