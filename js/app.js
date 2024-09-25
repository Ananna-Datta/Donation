document
  .getElementById("noakhali_donate_button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    console.log("inside the js");
    const balance = output("available_balance");
    const donation = amount("donate");
    const TotalDonation = output("total-donation");
    // console.log(balance , donation ,TotalDonation );

    if (donation > 0 && donation < balance) {
      const newtotalDonation = TotalDonation + donation;
      const newbalance = balance - donation;
      document.getElementById("total-donation").innerText = newtotalDonation;
      document.getElementById("available_balance").innerText = newbalance;



      // document.getElementById('btn-modal').classList.remove("hidden");
      // document.getElementById('btn-modal').showModel();
      alert("Congrates\n you are donated for mankind");

      
    } else {
      alert("Please enter the right amount");
      return;
    }

    const div = document.createElement("div");
    const d = new Date();
    div.innerHTML = `
    <div class="flex w-full flex-col m-4">
        <div class="card bg-base-300 rounded-box grid h-20 p-3">
        <h1 class="font-bold">${donation} Taka is Donated for famine-2024 at Noakhali, Bangladesh</h1>
        <p>${d}</p>
        </div>
    </div>`;
    document.getElementById('transection-container').appendChild(div); 
    // console.log(div.innerText);
  });

  

document
  .getElementById("feni_donate_button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const balance = output("available_balance");
    const donation = amount("donate_feni");
    const TotalDonation = output("total-donation_feni");
    console.log(balance, donation, TotalDonation);
    

    if (donation > 0 && donation < balance) {
      const newtotalDonation = TotalDonation + donation;
      const newbalance = balance - donation;
      document.getElementById("total-donation_feni").innerText =
        newtotalDonation;
      document.getElementById("available_balance").innerText = newbalance;
      alert("Congrates\n you are donated for mankind");
    } else {
      alert("Please enter the right amount");
      return;
    }

    const div = document.createElement("div");
    const d = new Date();
    div.innerHTML = `
    <div class="flex w-full flex-col m-4 p-9">
        <div class="card bg-base-300 rounded-box grid h-40 p-3">
        <h1 class="font-bold">${donation} Taka is Donated for famine-2024 at Feni, Bangladesh</h1>
        <p>${d}</p>
        </div>
    </div>`;
    document.getElementById('transection-container').appendChild(div);
  });

document
  .getElementById("quota_movement_btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const balance = output("available_balance");
    const donation = amount("donate_aid");
    const TotalDonation = output("total_aid");
    console.log(balance, donation, TotalDonation);

    if (donation > 0 && donation < balance) {
      const newtotalDonation = TotalDonation + donation;
      const newbalance = balance - donation;
      document.getElementById("total_aid").innerText = newtotalDonation;
      document.getElementById("available_balance").innerText = newbalance;
      alert("Congrates\n you are donated for mankind");
    } else {
      alert("Please enter the right amount");
      return;
    }

    const div = document.createElement("div");
    const d = new Date();
    div.innerHTML = `
    <div class="flex w-full flex-col m-4">
        <div class="card bg-base-300 rounded-box grid h-20 p-3">
        <h1 class="font-bold">${donation} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h1>
        <p>${d}</p>
        </div>
    </div>`;
    document.getElementById('transection-container').appendChild(div);
  });
