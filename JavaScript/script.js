let menu = document.querySelector("#menu-bars");
let header = document.querySelector("header");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  header.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  header.classList.remove("active");
};

let cursor1 = document.querySelector(".cursor-1");
let cursor2 = document.querySelector(".cursor-2");

window.onmousemove = (e) => {
  cursor1.style.top = e.pageY + "px";
  cursor1.style.left = e.pageX + "px";

  cursor2.style.top = e.pageY + "px";
  cursor2.style.left = e.pageX + "px";
};

document.querySelectorAll("a").forEach((links) => {
  links.onmouseenter = () => {
    cursor1.classList.add("active");
    cursor2.classList.add("active");
  };

  links.onmouseleave = () => {
    cursor1.classList.remove("active");
    cursor2.classList.remove("active");
  };
});

function sendEmail() {
  Email.send({
    SecureToken : "218c96be-e6ba-4233-908e-173f7ba5331e",
    To : "410411218@gms.tku.edu.tw",
    From : "andrew770426@gmail.com",
    Subject : "New Contact Email",
    Body : "Name: " + document.getElementById("name").value
         + "<br> Email: " + document.getElementById("email").value
         + "<br> Message: " + document.getElementById("body").value
  }).then(
    message => alert("Message Sent Successfully!")
  );
}
