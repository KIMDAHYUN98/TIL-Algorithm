const solution = (my_string) => my_string.split("").filter(e => !['a', 'e', 'i', 'o', 'u'].includes(e))
.join("")