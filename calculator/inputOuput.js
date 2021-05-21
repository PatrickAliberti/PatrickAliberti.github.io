function getHistory()
{
  return document.getElementById("history").innerText;
}

function printHistory(num)
{
  document.getElementById("history").innerHTML=num;
}

function getDisplay()
{
  return document.getElementById("display").innerText;
}

function printDisplay(num)
{
  if (num == "")
  {
    document.getElementById("display").innerText=num;
  }
  else
  {
    document.getElementById("display").innerText=getFormattedNumber(num);
  }
}

function getFormattedNumber(num)
{
  var n = Number(num);
  var Value = n.toLocaleString("en");
  return Value;
}

function reverseNumberFormat(num)
{
  return Number(num.replace(/,/g,''));
}

/*var operator = document.getElementsByClassName("operator");
for (var i = 0; i < operator.length; i++)
{
  operator[i].addEventListener('click', function()
  {
    if (this.id == "AC")
    {
      printHistory("");
      printDisplay("");
    }
    else
    {
      var display = getDisplay();
      var history = getHistory();
      if (display != "")
      {
        display = reverseNumberFormat(display);
        history = history + display;
        if (this.id == "=")
        {
          var result = eval(history);
          printDisplay(result);
          printHistory("");
        }
      }
    }
  });
}*/

var number = document.getElementsByClassName("number");
for (var i = 0; i < number.length; i++)
{
  number[i].addEventListener('click', function()
  {
    var display = reverseNumberFormat(getDisplay());
    if (display != NaN)
    {
      display = display  + this.id;
      printDisplay(display);
    }
  });
}

var operator = document.getElementsByClassName("operator");
for (var i = 0; i < operator.length; i++)
{
  operator[i].addEventListener('click', function()
  {
    if (this.id == "AC")
    {
      printHistory("");
      printDisplay("");
    }
    else
    {
      var display = getDisplay();
      var history = getHistory();
      if (display != "")
      {
        display = reverseNumberFormat(display);
        display = display + this.id;
        history = history + display;

        printHistory(history);
        printDisplay("");

        if (this.id == "=")
        {
          var history = history.replace(/[^-()\d/*+.]/g, '');
          var solution = eval(history);
          alert(solution);
          printDisplay(solution);
          printHistory("");
        }
      }
    }
  });
}