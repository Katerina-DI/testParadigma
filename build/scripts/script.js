function checkPopup(){1!=document.getElementById("popup").checked&&alert("Обязательное условие")}modal=document.getElementById("popupRequestId"),console.log(modal),btn=document.getElementById("btnPopup"),console.log(btn),span=document.getElementsByClassName("close")[0],console.log(span),btn.onclick=function(){modal.style.display="block"},span.onclick=function(){modal.style.display="none"},window.onclick=function(e){e.target==modal&&(modal.style.display="none")},accepted=document.getElementById("popupRequestAcceptedId"),btnAccep=document.getElementById("btnRequest"),spanAccep=document.getElementsByClassName("closeAccepted")[0],btnAccep.onclick=function(){modalClose=document.getElementById("popupRequestId"),(accepted.style.display="block")&&(modalClose.style.display="none")},spanAccep.onclick=function(){accepted.style.display="none"},window.onclick=function(e){e.target==accepted&&(accepted.style.display="none")};