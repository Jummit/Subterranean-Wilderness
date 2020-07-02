"use_strict";

const fs = require("fs").promises;

const names = [ "short_foxfire", "short_foxfire", "long_foxfire", "long_foxfire", "light_brown_roots", "brown_roots", "white_roots", "light_orange_roots", "dark_brown_roots", "orange_roots", "dirt_patch", "mossy_dirt_patch", "podzol_patch", "gravel_patch", "sand_patch", "red_sand_patch", "ice_patch", "water_puddle", "stone_speleothem", "granite_speleothem", "diorite_speleothem", "andesite_speleothem", "sandstone_speleothem", "red_sandstone_speleothem", "obsidian_speleothem", "frozen_stone_speleothem", "frozen_granite_speleothem", "frozen_diorite_speleothem", "frozen_andesite_speleothem", "frozen_sandstone_speleothem", "frozen_red_sandstone_speleothem", "frozen_obsidian_speleothem", "icicle", "molten_stone", "molten_granite", "molten_diorite", "molten_andesite", "molten_sandstone", "molten_smooth_sandstone", "molten_red_sandstone", "molten_smooth_red_sandstone", "molten_obsidian", "mossy_dirt", "mossy_sand", "mossy_red_sand", "mossy_gravel", "mossy_stone", "mossy_granite", "mossy_diorite", "mossy_andesite", "mossy_sandstone", "mossy_smooth_sandstone", "mossy_red_sandstone", "mossy_smooth_red_sandstone", "mossy_obsidian", "wet_stone", "wet_granite", "wet_diorite", "wet_andesite", "wet_obsidian", "sandstone_coal_ore", "sandstone_iron_ore", "sandstone_gold_ore", "sandstone_lapis_ore", "sandstone_redstone_ore", "sandstone_diamond_ore", "sandstone_emerald_ore", "smooth_sandstone_coal_ore", "smooth_sandstone_iron_ore", "smooth_sandstone_gold_ore", "smooth_sandstone_lapis_ore", "smooth_sandstone_redstone_ore", "smooth_sandstone_diamond_ore", "smooth_sandstone_emerald_ore", "red_sandstone_coal_ore", "red_sandstone_iron_ore", "red_sandstone_gold_ore", "red_sandstone_lapis_ore", "red_sandstone_redstone_ore", "red_sandstone_diamond_ore", "red_sandstone_emerald_ore", "smooth_red_sandstone_coal_ore", "smooth_red_sandstone_iron_ore", "smooth_red_sandstone_gold_ore", "smooth_red_sandstone_lapis_ore", "smooth_red_sandstone_redstone_ore", "smooth_red_sandstone_diamond_ore", "smooth_red_sandstone_emerald_ore", "terracotta_coal_ore", "terracotta_iron_ore", "terracotta_gold_ore", "terracotta_lapis_ore", "terracotta_redstone_ore", "terracotta_diamond_ore", "terracotta_emerald_ore", "white_terracotta_coal_ore", "white_terracotta_iron_ore", "white_terracotta_gold_ore", "white_terracotta_lapis_ore", "white_terracotta_redstone_ore", "white_terracotta_diamond_ore", "white_terracotta_emerald_ore", "orange_terracotta_coal_ore", "orange_terracotta_iron_ore", "orange_terracotta_gold_ore", "orange_terracotta_lapis_ore", "orange_terracotta_redstone_ore", "orange_terracotta_diamond_ore", "orange_terracotta_emerald_ore", "yellow_terracotta_coal_ore", "yellow_terracotta_iron_ore", "yellow_terracotta_gold_ore", "yellow_terracotta_lapis_ore", "yellow_terracotta_redstone_ore", "yellow_terracotta_diamond_ore", "yellow_terracotta_emerald_ore", "light_gray_terracotta_coal_ore", "light_gray_terracotta_iron_ore", "light_gray_terracotta_gold_ore", "light_gray_terracotta_lapis_ore", "light_gray_terracotta_redstone_ore", "light_gray_terracotta_diamond_ore", "light_gray_terracotta_emerald_ore", "brown_terracotta_coal_ore", "brown_terracotta_iron_ore", "brown_terracotta_gold_ore", "brown_terracotta_lapis_ore", "brown_terracotta_redstone_ore", "brown_terracotta_diamond_ore", "brown_terracotta_emerald_ore", "red_terracotta_coal_ore", "red_terracotta_iron_ore", "red_terracotta_gold_ore", "red_terracotta_lapis_ore", "red_terracotta_redstone_ore", "red_terracotta_diamond_ore", "red_terracotta_emerald_ore", "ice_coal_ore", "ice_iron_ore", "ice_gold_ore", "ice_lapis_ore", "ice_redstone_ore", "ice_diamond_ore", "ice_emerald_ore", "light_brown_roots", "brown_roots", "white_roots", "light_orange_roots", "dark_brown_roots", "orange_roots", "dirt_patch", "mossy_dirt_patch", "podzol_patch", "gravel_patch", "sand_patch", "red_sand_patch", "ice_patch", "water_puddle", "stone_speleothem", "granite_speleothem", "diorite_speleothem", "andesite_speleothem", "sandstone_speleothem", "red_sandstone_speleothem", "obsidian_speleothem", "frozen_stone_speleothem", "frozen_granite_speleothem", "frozen_diorite_speleothem", "frozen_andesite_speleothem", "frozen_sandstone_speleothem", "frozen_red_sandstone_speleothem", "frozen_obsidian_speleothem", "icicle", "molten_stone", "molten_granite", "molten_diorite", "molten_andesite", "molten_sandstone", "molten_smooth_sandstone", "molten_red_sandstone", "molten_smooth_red_sandstone", "molten_obsidian", "mossy_dirt", "mossy_sand", "mossy_red_sand", "mossy_gravel", "mossy_stone", "mossy_granite", "mossy_diorite", "mossy_andesite", "mossy_sandstone", "mossy_smooth_sandstone", "mossy_red_sandstone", "mossy_smooth_red_sandstone", "mossy_obsidian", "wet_stone", "wet_granite", "wet_diorite", "wet_andesite", "wet_obsidian", "sandstone_coal_ore", "sandstone_iron_ore", "sandstone_gold_ore", "sandstone_lapis_ore", "sandstone_redstone_ore", "sandstone_diamond_ore", "sandstone_emerald_ore", "smooth_sandstone_coal_ore", "smooth_sandstone_iron_ore", "smooth_sandstone_gold_ore", "smooth_sandstone_lapis_ore", "smooth_sandstone_redstone_ore", "smooth_sandstone_diamond_ore", "smooth_sandstone_emerald_ore", "red_sandstone_coal_ore", "red_sandstone_iron_ore", "red_sandstone_gold_ore", "red_sandstone_lapis_ore", "red_sandstone_redstone_ore", "red_sandstone_diamond_ore", "red_sandstone_emerald_ore", "smooth_red_sandstone_coal_ore", "smooth_red_sandstone_iron_ore", "smooth_red_sandstone_gold_ore", "smooth_red_sandstone_lapis_ore", "smooth_red_sandstone_redstone_ore", "smooth_red_sandstone_diamond_ore", "smooth_red_sandstone_emerald_ore", "terracotta_coal_ore", "terracotta_iron_ore", "terracotta_gold_ore", "terracotta_lapis_ore", "terracotta_redstone_ore", "terracotta_diamond_ore", "terracotta_emerald_ore", "white_terracotta_coal_ore", "white_terracotta_iron_ore", "white_terracotta_gold_ore", "white_terracotta_lapis_ore", "white_terracotta_redstone_ore", "white_terracotta_diamond_ore", "white_terracotta_emerald_ore", "orange_terracotta_coal_ore", "orange_terracotta_iron_ore", "orange_terracotta_gold_ore", "orange_terracotta_lapis_ore", "orange_terracotta_redstone_ore", "orange_terracotta_diamond_ore", "orange_terracotta_emerald_ore", "yellow_terracotta_coal_ore", "yellow_terracotta_iron_ore", "yellow_terracotta_gold_ore", "yellow_terracotta_lapis_ore", "yellow_terracotta_redstone_ore", "yellow_terracotta_diamond_ore", "yellow_terracotta_emerald_ore", "light_gray_terracotta_coal_ore", "light_gray_terracotta_iron_ore", "light_gray_terracotta_gold_ore", "light_gray_terracotta_lapis_ore", "light_gray_terracotta_redstone_ore", "light_gray_terracotta_diamond_ore", "light_gray_terracotta_emerald_ore", "brown_terracotta_coal_ore", "brown_terracotta_iron_ore", "brown_terracotta_gold_ore", "brown_terracotta_lapis_ore", "brown_terracotta_redstone_ore", "brown_terracotta_diamond_ore", "brown_terracotta_emerald_ore", "red_terracotta_coal_ore", "red_terracotta_iron_ore", "red_terracotta_gold_ore", "red_terracotta_lapis_ore", "red_terracotta_redstone_ore", "red_terracotta_diamond_ore", "red_terracotta_emerald_ore", "ice_coal_ore", "ice_iron_ore", "ice_gold_ore", "ice_lapis_ore", "ice_redstone_ore", "ice_diamond_ore", "ice_emerald_ore" ];

async function run()
{
	let lang = {};
	for(name of names)
	{
		let locName = name.split("_").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
		lang["block.expedition." + name] = locName;
	}
	await fs.writeFile("en_us.json", JSON.stringify(lang, null, "\t"));
}

run();