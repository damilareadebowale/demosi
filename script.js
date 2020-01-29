function performcalculation()
            {
                pr = document.getElementById("pr").value;
                rt = document.getElementById("rt").value;
                tm = document.getElementById("tm").value;
                result = document.getElementById("result");

                result.innerHTML = " ANSWER = " + (pr*rt*tm/100);
            }