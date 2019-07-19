export const updateUser = (user) => {
    
    return $.ajax({
        method: 'patch',
        url: `/api/user/${user.id}`,
        data: { user }
    })
}