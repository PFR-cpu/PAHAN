const idea = document.getElementById('Idea');
const features = document.getElementById('Features');
const plans = document.getElementById('Plans');

function getIdea(){
    idea.style.display = 'block';
    features.style.display = 'none';
    plans.style.display = 'none';
} 

function getFeatures(){
    idea.style.display = 'none';
    features.style.display = 'block';
    plans.style.display = 'none';
}

function getPlans(){
    idea.style.display = 'none';
    features.style.display = 'none';
    plans.style.display = 'block';
}
function checkPahan(){
    const input = document.getElementById('coshel-input')
    input.value = 'Идет проверка...'
    

}

