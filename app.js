const express = require("express");
const { readFileSync, readFile } = require("fs");
const path = require("path");

const port = 5000;
const app = express();
const templateNav = readFileSync("./portfolio/template-nav.html", "utf-8");
const templateFooter = readFileSync(
  "./portfolio/template-footer.html",
  "utf-8"
);

app.use(express.static("./public"));

app.get("/", (req, res) => {
  readFile("./portfolio/home.html", "utf-8", (error, homePage) => {
    if (error) {
      console.log(error);
    } else {
      res.status(200).send(templateNav + homePage + templateFooter);
    }
  });
});

app.get("/home", (req, res) => {
  readFile("./portfolio/home.html", "utf-8", (error, homePage) => {
    if (error) {
      console.log(error);
    } else {
      res.status(200).send(templateNav + homePage + templateFooter);
    }
  });
});

app.get("/about", (req, res) => {
  readFile("./portfolio/about.html", "utf-8", (error, aboutPage) => {
    if (error) {
      console.log(error);
    } else {
      res.status(200).send(templateNav + aboutPage + templateFooter);
    }
  });
});

app.get("/skills", (req, res) => {
  readFile("./portfolio/skills.html", "utf-8", (error, skillsPage) => {
    if (error) {
      console.log(error);
    } else {
      res.status(200).send(templateNav + skillsPage + templateFooter);
    }
  });
});

app.get("/portfolio", (req, res) => {
  readFile("./portfolio/portfolio.html", "utf-8", (error, portfolioPage) => {
    if (error) {
      console.log(error);
    } else {
      res.status(200).send(templateNav + portfolioPage + templateFooter);
    }
  });
});

app.get("/services", (req, res) => {
  readFile("./portfolio/services.html", "utf-8", (error, servicesPage) => {
    if (error) {
      console.log(error);
    } else {
      res.status(200).send(templateNav + servicesPage + templateFooter);
    }
  });
});

app.get("/contact", (req, res) => {
  readFile("./portfolio/contact.html", "utf-8", (error, contactPage) => {
    if (error) {
      console.log(error);
    } else {
      res.status(200).send(templateNav + contactPage + templateFooter);
    }
  });
});

app.all("*", (req, res) => {
  readFile("./portfolio/error.html", "utf-8", (error, errorPage) => {
    if (error) {
      console.log(error);
    } else {
      res.status(200).send(templateNav + errorPage + templateFooter);
    }
  });
});

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
