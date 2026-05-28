let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {

    e.preventDefault();

    deferredPrompt = e;

});

const installButton =
document.getElementById('install-button');

if(installButton){

    installButton.addEventListener('click', async () => {

        if(!deferredPrompt){

            alert(
                'Install option is currently unavailable on this device.'
            );

            return;
        }

        deferredPrompt.prompt();

        const choice =
        await deferredPrompt.userChoice;

        deferredPrompt = null;

    });

}