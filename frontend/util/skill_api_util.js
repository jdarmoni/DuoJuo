export const createSkill = (skill) => {

    return $.ajax({
        method: 'post',
        url: `/api/skill/`,
        data: { skill }
    })
}

export const updateSkill = (skill) => {

    return $.ajax({
        method: 'patch',
        url: `api/skill/${skill.id}`,
        data: { skill }
    })
}