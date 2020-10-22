

       
      function compCost(){
          var qf, ql, qk, qp, qx, qn, qc, qi, qd, qr, qb, total;
          
              //read inputs
          qf = parseFloat(document.getElementById("fab").value);
          //handle the unexpected input
          if(isNaN(qf)) qf=0;
          ql = parseFloat(document.getElementById("lulu").value);
          if(isNaN(ql)) ql=0;
          qk = parseFloat(document.getElementById("kicks").value);
          
          if(isNaN(qk)) qk=0;
          qp = parseFloat(document.getElementById("play").value);
          if(isNaN(qp)) qp=0;
          qx = parseFloat(document.getElementById("box").value);
          if(isNaN(qx)) qx=0;
          qn = parseFloat(document.getElementById("tendo").value);
          if(isNaN(qn)) qn=0;
          
          qc = parseFloat(document.getElementById("charm").value);
          if(isNaN(qc)) qc=0;
          qi = parseFloat(document.getElementById("ipsy").value);
          if(isNaN(qi)) qi=0;
          
          qd = parseFloat(document.getElementById("kindle").value);
          if(isNaN(qd)) qd=0;
          qr = parseFloat(document.getElementById("reader").value);
          if(isNaN(qr)) qr=0;
          qb = parseFloat(document.getElementById("books").value);
          if(isNaN(qb)) qb=0;
          
          
          
     //calculation total
         total = 24.49*qf + 50.59*ql + 45.50*qk + 20.00*qp + 24.00*qx + 14.50*qn + 10.00*qc + 7.50*qi + 26.00*qd + 12.00*qr + 4.59*qb;
              // output total
          document.getElementById("cost").value = "$"+total.toFixed(3);
      }
    
    

       
      function compTotal(){
          var tn, th, ta, ts, tp, tc, tb, tl, td, tr, tm, total;
          
              //read inputs
          tn = parseFloat(document.getElementById("netflix").value);
          //handle the unexpected input
          if(isNaN(tn)) tn=0;
          th = parseFloat(document.getElementById("hulu").value);
          if(isNaN(th)) th=0;
          ta = parseFloat(document.getElementById("apple").value);
          if(isNaN(ta)) ta=0;
          
          ts = parseFloat(document.getElementById("spot").value);
          if(isNaN(ts)) ts=0;
          tp = parseFloat(document.getElementById("app").value);
          if(isNaN(tp)) tp=0;
          tc = parseFloat(document.getElementById("cloud").value);
          if(isNaN(tc)) tc=0;
          
          tb = parseFloat(document.getElementById("club").value);
          if(isNaN(tb)) tb=0;
          tl = parseFloat(document.getElementById("logy").value);
          if(isNaN(tl)) tl=0;
          td = parseFloat(document.getElementById("candles").value);
          if(isNaN(td)) td=0;
          
          tr = parseFloat(document.getElementById("prime").value);
          if(isNaN(tr)) tr=0;
          tm = parseFloat(document.getElementById("trum").value);
          if(isNaN(tm)) tm=0;
          
          
          
     //calculation total
    total = 5.50*tn + 2.45*th + 3.40*ta + 3.40*ts + 4.99*tp + 6.50*tc + 5.00*tb + 4.99*tl + 10.00*td + 25.00*tr + 15.00*tm;
              // output total
          document.getElementById("total").value = "$"+total.toFixed(3);
      }
      
function showTime() {
        var d = new Date();
        document.getElementById("clock").innerHTML = d.toLocaleTimeString();
    }
    setInterval(showTime, 1000);


