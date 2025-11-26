const story = Deno.readTextFileSync("./output.txt");
Deno.writeTextFileSync("solution.txt", story.split("\n").join(" "));
