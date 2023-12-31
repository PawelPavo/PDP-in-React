import React from "react";
import HomePageCategoryCard from "./HomePageCategoryCard";
import HomePageBlogCard from "./HomePageBlogCard";

const NutritionCategory = [
    {
        id: 1,
        title: "9 Festive Holiday Coffee Recipes",
        image: "https://www.lifeextension.com/-/media/lifeextension/wellness/recipes/holiday-coffee-recipes/holiday-coffee-recipes_promo.jpg",
        body:"Ready to blend up the flavors of the season in your favorite cup of coffee? These nine healthy and delicious latte recipes bring the tastes of peppermint, chocolate, gingerbread, and cinnamon to your cup.",
        author:"Mia Syn, MS, RD",
        category:"Recipes",
        views: "999,999"
    },
    {
        id: 2,
        title: "DIY Mimosa Bar: How to Serve Mimosas Like a Professional",
        image: "https://www.lifeextension.com/-/media/lifeextension/wellness/herbs-spices/boswellia-serrata/boswellia-serrata_promo.jpg",
        body:"Maqui berries look a lot like blueberries and have a similar taste—but these berries offer distinctly different health benefits. (They are “berry” good for your eyes, for example.)",
        author:"Megan Grant",
        category:"Antioxidants",
        views: "11,209"
    },
    {
        id: 3,
        title: "Immune Support",
        image: "https://www.lifeextension.com/-/media/lifeextension/wellness/lifestyle/mimosa-bar/mimosa-bar_promo.jpg",
        body:"Go for your gains! Creatine, an amino acid derivative known for being a popular workout supplement, has some extra special benefits for women. Discover the health-promoting benefits of creatine for women—from mood and muscle recovery to maintaining your natural stores and more.",
        author:"Stephen Tapanes, PhD",
        category:"Herbs & Spices",
        views: "10,354"
    }
]

const NutritionSubCategories = [
    {
        id: 1,
        title: "Aging",
    },
    {
        id: 2,
        title: "Fitness",
    },
    {
        id: 3,
        title: "Lifestyle",
    },
    {
        id: 4,
        title: "Mind & Memory",
    },
    {
        id: 5,
        title: "Pet Health",
    },
    {
        id: 6,
        title: "Weight",
    }

]

const HealthyLiving = (props) => {
    return(
        <>
        <HomePageCategoryCard NutritionSubCategories={NutritionSubCategories} categoryTitle={"Healthy Living"}></HomePageCategoryCard>
        {NutritionCategory.map(item => (
            <>
                <HomePageBlogCard id={item.id} title={item.title} image={item.image} body={item.body} author={item.author} category={item.category} views={item.views}></HomePageBlogCard>
            </>
        ))}
</>
    )
}

export default HealthyLiving;