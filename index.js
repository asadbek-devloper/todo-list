"use stric";

let data = [];

// element
const list = document?.querySelector(".list");
const form = document?.querySelector(".form");
let listItme;
// buttons
const plusBtn = document?.querySelector(".plus-btn");
const createBtn = document?.querySelector(".button");
// input

const input = document.querySelector(".input");

// logics
// ===============================================
plusBtn?.addEventListener("click", (e) => {
  form?.classList.remove("hidden");
  plusBtn?.classList.add("hidden");
});

const createElement = () => {
  list.innerHTML = "";
  if (data?.length > 0) {
    data.forEach((d) => {
      list.insertAdjacentHTML(
        "afterbegin",
        `<li class="list-item ${d.isChecked ? "isChecked" : ""} " data-set=${
          d?.id
        }>
        <div>
        ${
          d.isChecked
            ? `<span class="checked">
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          style="fill: rgba(10, 239, 61, 1); transform: 0; msfilter: 0"
        >
          <path
            d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1.999 14.413-3.713-3.705L7.7 11.292l2.299 2.295 5.294-5.294 1.414 1.414-6.706 6.706z"
          ></path>
        </svg>
      </span>
`
            : `<span class="circle">
<svg
  width="28"
  height="28"
  viewBox="0 0 28 28"
  style="fill: white; transform: 0; msfilter: 0"
>
  <path
    d="M5 12c0 3.859 3.14 7 7 7 3.859 0 7-3.141 7-7s-3.141-7-7-7c-3.86 0-7 3.141-7 7zm12 0c0 2.757-2.243 5-5 5s-5-2.243-5-5 2.243-5 5-5 5 2.243 5 5z"
  ></path>
</svg>
</span>`
        }
          
            <div class="name ${d.isChecked ? "isChecked" : ""}">${
          d?.listName
        }</div>
        </div>
        <div class="createdAt"><span>${d?.createdAt}</span></div>
      </li>`
      );
    });
  }
};

createBtn?.addEventListener("click", (e) => {
  e?.preventDefault();
  list.innerHTML = "";
  const date = new Date();
  const hour = date.getHours();
  const listObj = {
    id: date.getTime(),
    isChecked: false,
    listName: input?.value,
    createdAt: `${Math.abs(hour - 12)}.${
      date.getMinutes() <= 10 ? 0 + date.getMinutes() : date.getMinutes()
    } ${hour <= 12 ? "AM" : "PM"}`,
  };
  data.push(listObj);
  createElement();
  input.value = "";
  form.classList.add("hidden");
  plusBtn.classList.remove("hidden");
});

list.addEventListener("click", () => {
  listItme = document.querySelectorAll(".list-item");
  listItme?.forEach((itme) => {
    itme?.addEventListener("click", (e) => {
      const dataset = +e.currentTarget.dataset.set;
      data = data.map((d) => {
        if (d.id === dataset) {
          const newObj = {
            id: d.id,
            listName: d.listName,
            createdAt: d.createdAt,
            isChecked: true,
          };
          return newObj;
        } else {
          return d;
        }
      });
      createElement();
    });
  });
});
