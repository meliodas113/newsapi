

function fetchAPI()
    {   var userinput = document.getElementById("query").value;
        var userinput1 = document.getElementById("query1").value + " ";
        var keywords = [userinput , userinput1];
        var final = keywords.join(" ");
        console.log(final);
        if(userinput != "" && userinput1 != "")
        {
        
        let url = "https://newsapi.org/v2/everything?q="+final+"&domains=nytimes.com,hindustantimes.com,aninews.in,ians.in,timesofindia.indiatimes.com,bbc.com,edition.cnn.com&apiKey=0b2e695773fa4094bfc0032461061b3f";
        fetch(url)
        .then(function(resp){
            return resp.json();
        })
        .then(function(data){
            let output = "";
            let latestNews = data.articles;
            
            for(var i in latestNews){
              output +=`
                <div class="rows">
                <h4>${latestNews[i].title}</h4>
                <img src="${latestNews[i].urlToImage}" class="responsive-img">
                <p>${latestNews[i].description}</p>
                <p>${latestNews[i].content}</p>
                <p>Published on: ${latestNews[i].publishedAt}</p>
                <a href="${latestNews[i].url}" class="btn" target="_blank">Read more</a>
                </div>
              `;
            }
            
            if(output !== ""){
              $(".container").html(output);
            }else
            {
              alert("No result found");
            }
        })
        .catch(function(error) {
         alert(error);
        });
       }
       else
       {
       alert('Please enter some text');
       }  
    }


    // JKtDo01pbxGIjcE1aKRVh9DlZqPSPCgmRBmd98f1DR3114pK

