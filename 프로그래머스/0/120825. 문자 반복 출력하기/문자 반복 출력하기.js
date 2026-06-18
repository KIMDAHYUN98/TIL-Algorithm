const solution = (my_string, n) => [...my_string].reduce((v, c) => { return v + c.repeat(n) }, "");
