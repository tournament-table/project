    var a = () => {
      return element.results.map((value) => {
        var sep = value.outcome.split("");
        var letter = sep[0].toUpperCase();
        if (letter == "W") {
          return <span className="green"></span>;
        } else if (letter == "D") {
          return <span className="grey"></span>;
        } else if (letter == "L") {
          return <span className="red"></span>;
        }
      });
    };
