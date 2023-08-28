//post
const postBtn=document.querySelector(".post-btn");
console.log(postBtn);
const modelWrapper=document.querySelector(".model-wrapper");
const model=document.querySelector(".model");
const postx=document.querySelector(".model-header i");
const postxl=document.querySelector(".form-btn");
postBtn.addEventListener('click' , () => {
    model.style.display = "block";
    modelWrapper.classList.add("model-wrapper-display");
});
postx.addEventListener("click" , ()=>{
    model.style.display="none";
    modelWrapper.classList.remove('model-wrapper-display');
})
postxl.addEventListener("click" , ()=>{
    model.style.display="none";
    modelWrapper.classList.remove('model-wrapper-display');
})
///add
let form=document.querySelector(".myform");
console.log(form);
form.addEventListener("submit" , function(ev){
    ev.preventDefault();
    let i=document.querySelector(".model-input");
    let val=i.value;
    console.log(val);
    add(val);
    i.value="";
})
function add(x){
    let p=document.createElement("p");
    p.classList.add("post-content");
    p.innerHTML=` <div class="post">
    <div class="user-avatar">
        <img src="/images/userimg.jpg">
    </div>
    <div class="post-content">
        <div class="post-user-info">
            <h4>Vasu Khattar </h4>
            <i class="fas fa-check-circle"></i>
            <span>@Vasu Khattar . Now</span>
            <span class="trash"><i class="fas fa-trash"></i></span>
        </div> ${x}
             <div class="post-icons">
                <i class="far fa-comment"></i>
                <i class="fas fa-retweet"></i>
                <i class="far fa-heart"></i>
                <i class="fas fa-share-alt"></i>
             </div>
            </div>
    </div>`;
    let posts=document.querySelector(".posts");
    console.log(posts);
    posts.prepend(p);
}

//delete item
let posts=document.querySelector(".posts");
posts.addEventListener("click",function(ev){
    console.log(ev.target);
    console.log(ev);
    let c=ev.target.className;
    let curr=ev.target;
    if(c=="fas fa-trash"){
        let ans=curr.parentElement.parentElement.parentElement.parentElement;
        console.log(ans);
        ans.remove();
    }
    
})