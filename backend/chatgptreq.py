import openai
import re
import json
import config

openai.api_key = config.getConfigKey()


# generate response from chatgpt api
def generateChatResponse(num, prompt):
    messages = [{"role": "user", "content": prep_prompt(num, prompt)}]

    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo", messages=messages)

    return response.choices[0].message["content"]


# prepare the prompt for response receival from chatgpt api
def prep_prompt(num_recipes, prompt):
    message = "Give me " + str(num_recipes) + \
        " recipes with their ingredients and instructions that I can make with only: " + \
        prompt
    return message


# prepare the result by filtering string response into json data
def prep_res(ans):
    # split recipes at Recipe #:
    recipes = re.split(r'Recipe \d+:', ans)
    # strip each recipe of any whitespace and newline characters at the ends
    recipes = [r.strip() for r in recipes if r.strip()]

    # store recipe dictionaries
    formatted_recipes = []

    for recipe in recipes:
        recipe_dict = {}

        # get recipe name by splitting at first occurrance of double new line, and storing the rest in rest
        # the 1 parameter tells us that the split only happens once
        recipe_name, rest = recipe.split('\n', 1)
        recipe_dict['recipe'] = recipe_name.strip()

        # split at instructions which results in list with 2 values, first will be ingredients, and second will be instructions
        ingredients_section, instructions = rest.split('Instructions:\n')
        # splitting by newline results in individual entries for ingredients
        ingredients = [i.strip() for i in ingredients_section.split('\n- ')]
        # store ingredients in recipe_dict
        recipe_dict['ingredients'] = ingredients[1:]

        format_instructions = [i.strip() for i in instructions.split('\n')]
        recipe_dict['instructions'] = format_instructions

        formatted_recipes.append(recipe_dict)

    json_recipe = json.dumps(formatted_recipes)
    return json_recipe
