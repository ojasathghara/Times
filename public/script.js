const createStoryElement = (story) => {
    // a function to create latest story individual items
    let linkText = document.createTextNode(story.title);
    let anchor = document.createElement("a");

    anchor.appendChild(linkText);
    anchor.setAttribute("href", story.link);
    anchor.className = "latest-card-description";

    let dateText = document.createTextNode(story.publishedOn);
    let datePara = document.createElement("p");
    datePara.className = "latest-card-date";

    datePara.appendChild(dateText);

    let latestCardItem = document.createElement("div");
    latestCardItem.className = "latest-card";

    latestCardItem.appendChild(anchor);
    latestCardItem.appendChild(datePara);

    return latestCardItem;
};

const createFeaturedElement = (feature) => {
    // a function to create featured story individual items
    let titleText = document.createTextNode(feature.title);
    let descriptionText = document.createTextNode(feature.description);

    let title = document.createElement("h4");
    title.className = "featured-card-title";
    title.appendChild(titleText);

    let description = document.createElement("p");
    description.className = "featured-card-description";
    description.appendChild(descriptionText);

    let featuredCardItem = document.createElement("div");
    featuredCardItem.className = "featured-card";
    featuredCardItem.appendChild(title);
    featuredCardItem.appendChild(description);

    return featuredCardItem;
};

const getLatestStories = () => {
    // calling the api to get latest story
    fetch("http://localhost:16500/getTimeStories")
        .then((response) => response.json())
        .then((data) => {
            // getting the div of the latest content
            let latestContent =
                document.getElementsByClassName("latest-content")[0];
            data.map((story) => {
                //converting individual story items to cards and appending to the section
                const latestCardItem = createStoryElement(story);
                latestContent.appendChild(latestCardItem);
            });
        });
};

const getFeaturedVoices = () => {
    // calling the api to get featured stories
    fetch("http://localhost:16500/getFeaturedStories")
        .then((response) => response.json())
        .then((data) => {
            // storing the section into a variable
            let featuredContent =
                document.getElementsByClassName("featured-content")[0];
            data.map((featured) => {
                // creating individual items and appending to the section
                const featuredCardItem = createFeaturedElement(featured);
                featuredContent.appendChild(featuredCardItem);
            });
        });
};

getLatestStories();
getFeaturedVoices();
