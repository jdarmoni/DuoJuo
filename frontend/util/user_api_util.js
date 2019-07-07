export const updateUser = (user) => {
    debugger
    return $.ajax({
        method: 'patch',
        url: `/api/user/${user.id}`,
        data: { user }
    })
}