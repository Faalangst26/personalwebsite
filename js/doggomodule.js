const doggomodule = function (cuteness){


    const doggoFeedback = function (iscute){
        return promise = new Promise((resolve, reject) =>{
            if(iscute){
                resolve('de hond is schattig!');
            } else{
                reject('de hond is niet schattig!');
            }

        })

    }

    const doggoFeedbackHandler = function (result){
        alert(result)
    }

    const doggoFeedbackController = async function () {

        let result = await doggoFeedback(configmap.iscute);
        doggoFeedbackHandler(result);
    }

    let configmap = {
        iscute: cuteness
    }

    const init = function (){
        configmap.iscute = true;
        doggoFeedbackController();
    }

    return{
        init:init
    }

}(true);