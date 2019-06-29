export const createSkill = (skill) => {

    return $.ajax({
        method: 'post',
        url: `/api/skills/`,
        data: { skill }
    })
}

export const updateSkill = (skill) => {
    
    return $.ajax({
        method: 'patch',
        url: `api/skills/${skill.id}`,
        data: { skill }
    })
}