module.exports = function(eleventyConfig){

    eleventyConfig.addPassthrough("./src/css/normalize.css");
    eleventyConfig.addPassthrough("./src/css/default_theme.css");
    eleventyConfig.addPassthrough("./src/css/fdbiomag.css");
    eleventyConfig.addPassthrough("./src/js/script.js");
    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
}