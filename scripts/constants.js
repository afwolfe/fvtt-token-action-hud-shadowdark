/**
 * Module-based constants
 */
export const MODULE = {
    ID: 'token-action-hud-shadowdark'
}

/**
 * Core module
 */
export const CORE_MODULE = {
    ID: 'token-action-hud-core'
}

/**
 * Core module version required by the system module
 */
export const REQUIRED_CORE_MODULE_VERSION = '1.5'

/**
 * Action types
 */
export const ACTION_TYPE = {
    attack: 'SHADOWDARK.sheet.npc.attacks_label',
    ability: 'SHADOWDARK.class-ability.ability.label',
    spell: 'SHADOWDARK.item_type.spell',
    item: 'tokenActionHud.template.item',
    light: 'SHADOWDARK.sheet.item.tab.light',
    feature: 'SHADOWDARK.sheet.npc.features_label'
    // utility: 'tokenActionHud.utility'
}

/**
 * Groups
 */
export const GROUP = {
    // armor: { id: 'armor', name: 'SHADOWDARK.inventory.section.armor', type: 'system' },
    inventory: { id: 'inventory', name: 'SHADOWDARK.sheet.player.tab.inventory', type: 'system' },
    // consumables: { id: 'consumables', name: 'SHADOWDARK.inventory.section.potions', type: 'system' },
    // containers: { id: 'containers', name: 'tokenActionHud.template.containers', type: 'system' },
    // treasure: { id: 'treasure', name: 'SHADOWDARK.inventory.section.treasure', type: 'system' },
    attacks: { id: 'attacks', name: 'SHADOWDARK.sheet.npc.attacks_label', type: 'system' },
    abilities: { id: 'abilities', name: 'SHADOWDARK.sheet.abilities.label', type: 'system' },
    spells: { id: 'spells', name: 'SHADOWDARK.sheet.player.spells', type: 'system'},
    light: {id: 'light', name: 'SHADOWDARK.sheet.item.tab.light', type: 'system'},
    features: {id: 'features', name: 'SHADOWDARK.sheet.npc.features_label', type: 'system'}
    // combat: { id: 'combat', name: 'tokenActionHud.combat', type: 'system' },
    // token: { id: 'token', name: 'tokenActionHud.token', type: 'system' },
    // utility: { id: 'utility', name: 'tokenActionHud.utility', type: 'system' }
}

/**
 * Item types
 */
export const ITEM_TYPE = {
//     // armor: { groupId: 'armor' },
//     // backpack: { groupId: 'containers' },
//     // consumable: { groupId: 'consumables' },
//     // equipment: { groupId: 'equipment' },
//     // treasure: { groupId: 'treasure' },
    weapon: { groupId: 'SHADOWDARK.inventory.section.weapon' }
}

export const COMPENDIUM_ID = {
    thrown: 'Compendium.shadowdark.properties.Item.c35ROL1nXwC840kC'
}

export const ABILITY = {
    str: { name: 'SHADOWDARK.ability_strength' },
    dex: { name: 'SHADOWDARK.ability_dexterity' },
    con: { name: 'SHADOWDARK.ability_constitution' },
    int: { name: 'SHADOWDARK.ability_intelligence' },
    wis: { name: 'SHADOWDARK.ability_wisdom' },
    cha: { name: 'SHADOWDARK.ability_charisma' }
}

export const ICON = {
    thrown: '<i class="fa-solid fa-share"></i>',
    wand: '<i class="fa-solid fa-wand-magic-sparkles"></i>',
    scroll: '<i class="fa-solid fa-scroll"></i>'
}