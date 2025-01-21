const form = document.getElementById('ticket-form');

const dropArea = document.getElementById('drop-area');
const fileInput = document.getElementById('file-input');
const uploadedImage = document.getElementById('upload-image');
const messageAction = document.getElementById('message-action');
const fileActions = document.getElementById('file-actions');
const removeImage = document.getElementById('remove-image');
const changeImage = document.getElementById('change-image');
const uploadHint = document.getElementById('upload-hint');

const textInputs = document.querySelectorAll('.required');

const formData={
    image: '',
    name: '',
    email: '',
    githubUsername: ''
}
function validateTextInputs(){
    let isValid = true;
    textInputs.forEach(input=>{
        const hint = input.nextElementSibling;
        if(input.value.trim() ===''){
            input.classList.add('error')
            hint.classList.add('error')
            isValid = false;
        } else{
            input.classList.remove('error')
            hint.classList.remove('error')
        }
    })
    return isValid
    
}
function validateFile(input, hint){
    const file = input.files[0]
    let isValid = true
    if(!file){
        input.classList.add('error')
        hint.classList.add('error')
        isValid = false;
    } else{
        const validTypes = ['image/jpeg', 'image/png']
        const maxSize = 500*1024
        if(!validTypes.includes(file.type)){
            hint.classList.add('error')
            input.value=''
            isValid=false
        }else if(file.size>maxSize){
            hint.classList.add('error')
            input.value=''
            isValid=false
        }else{
            hint.classList.remove('error')
            hint.innerHTML = "photo loaded"
            displayUploadedImage(file)
        }
    }
    return isValid
}
function displayUploadedImage(file){
    const reader = new FileReader()
    reader.onload = e =>{
        uploadedImage.src = e.target.result
        fileActions.classList.add('show')
        messageAction.classList.add('hide')
    }
    reader.readAsDataURL(file)
}
function resetUpload(){
    const defaultUploadIcon = 'assets/images/icon-upload.svg'
    fileInput.value=''
    uploadedImage.src = defaultUploadIcon
    messageAction.classList.remove('hide')
    fileActions.classList.remove('show')
    uploadHint.classList.remove('error')
}
function storeAndDisplayFormData(){
    formData.image = uploadedImage.src
    formData.name = document.getElementById('full-name').value.trim()
    formData.email = document.getElementById('email').value.trim()
    formData.githubUsername = document.getElementById('github').value.trim()

    document.getElementById('header-name').textContent = formData.name
    document.getElementById('display-name').textContent = formData.name
    document.getElementById('display-email').textContent = formData.email
    document.getElementById('display-github').textContent = formData.githubUsername
    document.getElementById('display-image').src = formData.image
}
dropArea.addEventListener('click', () => {
    fileInput.click();
})
dropArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    return;
})
dropArea.addEventListener('drop', (e) => {
    e.preventDefault();

    const files = e.dataTransfer.files;
    if(files.length > 0){
        fileInput.files = files;
        validateFile(fileInput, uploadHint);
    }
})
fileInput.addEventListener('change', ()=>{
    validateFile(fileInput, uploadHint)
})
removeImage.addEventListener('click', (e)=>{
    e.preventDefault();
    resetUpload();
})
changeImage.addEventListener('click', (e)=>{
    e.preventDefault();
    fileInput.click();
})
form.addEventListener('submit', e=>{
    e.preventDefault();
    const isTextValid = validateTextInputs();
    const isFileValid = validateFile(fileInput, uploadHint);
    if(isTextValid && isFileValid){
        storeAndDisplayFormData();
        document.getElementById('form-content').style.display = 'none';
        document.getElementById('display-data').style.display = 'block';
    }
})



