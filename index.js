import axios from 'axios'

// Schedule
export const getAllSchedule = async (username, password) => {
    if (!username || !password) return {data: '', error: 'Username or password not found!'}
    try {
        const rs = await axios.post('http://theutcapi.herokuapp.com/schedule', {
            username,
            password
        })

        return {data: rs.data.data, error:''}

    } catch (error) {
        return {data: '', error: error.response.data.error}
    }
}

export const getScheduleOfToday = async (username, password) => {
    if (!username || !password) return {data: '', error: 'Username or password not found!'}
    try {
        const rs = await axios.post('http://theutcapi.herokuapp.com/schedule/today', {
            username,
            password
        })

        return {data: rs.data.data, error:''}

    } catch (error) {
        return {data: '', error: error.response.data.error}
    }
}

export const getScheduleOfDay = async (username, password, date) => {
    if (!username || !password) return {data: '', error: 'Username or password not found!'}
    if (!date) return {data: '', error: 'Date not found!'}
    try {
        const rs = await axios.post(`http://theutcapi.herokuapp.com/schedule/day?year=${date.getFullYear()}&month=${date.getMonth()}&day=${date.getDate()}`, {
            username,
            password
        })

        return {data: rs.data.data, error:''}

    } catch (error) {
        return {data: '', error: error.response.data.error}
    }
}

// Marks
export const getMarks = async (username, password, grade) => {
    if (!username || !password) return {data: '', error: 'Username or password not found!'}
    try {
        const rs = await axios.post(`http://theutcapi.herokuapp.com/mark/${grade ? grade : ''}`, {
            username,
            password
        })

        return {data: rs.data.data, error:''}

    } catch (error) {
        return {data: '', error: error.response.data.error}
    }
}

export const getGPA = async (username, password, year) => {
    if (!username || !password) return {data: '', error: 'Username or password not found!'}
    try {
        const rs = await axios.post(`http://theutcapi.herokuapp.com/mark/gpa/${year ? year : ''}`, {
            username,
            password
        })

        return {data: rs.data.data, error:''}

    } catch (error) {
        return {data: '', error: error.response.data.error}
    }
}

//  Student Profile
export const getStudent = async (username, password) => {
    if (!username || !password) return {data: '', error: 'Username or password not found!'}
    try {
        const rs = await axios.post(`http://theutcapi.herokuapp.com/student`, {
            username,
            password
        })

        return {data: rs.data.data, error:''}

    } catch (error) {
        return {data: '', error: error.response.data.error}
    }
}

// Tuition
export const getTuition = async (username, password) => {
    if (!username || !password) return {data: '', error: 'Username or password not found!'}
    try {
        const rs = await axios.post(`http://theutcapi.herokuapp.com/tuition`, {
            username,
            password
        })

        return {data: rs.data.data, error:''}

    } catch (error) {
        return {data: '', error: error.response.data.error}
    }
}

export const getPaidTuition = async (username, password) => {
    if (!username || !password) return {data: '', error: 'Username or password not found!'}
    try {
        const rs = await axios.post(`http://theutcapi.herokuapp.com/tuition/paid`, {
            username,
            password
        })

        return {data: rs.data.data, error:''}

    } catch (error) {
        return {data: '', error: error.response.data.error}
    }
}

export const getTuitionDebt = async (username, password) => {
    if (!username || !password) return {data: '', error: 'Username or password not found!'}
    try {
        const rs = await axios.post(`http://theutcapi.herokuapp.com/tuition/debt`, {
            username,
            password
        })

        return {data: rs.data.data, error:''}

    } catch (error) {
        return {data: '', error: error.response.data.error}
    }
}