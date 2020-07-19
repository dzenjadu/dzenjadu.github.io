class DoctorWhoService {
    #urn = 'https://dzenjadu.github.io/data/DoctorWhoData.json';

    async getData() {
        const res = await fetch(this.#urn);

        if (!res.ok) {
            throw Error('Нет доступа к бд');
        }

        return await res.json();
    }

    getCategories = () => ({
        doctors: 'Доктор',
        companions: 'Спутники',
    })

    getDetails = () => ({
        gender: 'Пол',
        race: 'Раса',
        family: 'Семья',
        planet: 'Планета',
        birth: 'Рождение',
        death: 'Смерть',
        nickname: 'Прозвище',
        doings: 'Занятия',
        wife: 'Жена',
        motherInLaw: 'Тёща',
        fatherInLaw: 'Тесть',
    })
}

export default DoctorWhoService;