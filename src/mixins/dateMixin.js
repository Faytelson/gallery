export const dateMixin = {
    methods: {
        setFormattedDate(dataString) {
            let date = new Date(dataString);
      
            if(!isNaN(date.getTime())) {
              const year = date.getFullYear().toString().padStart(2, '0');
              const month = (date.getMonth() + 1).toLocaleString().padStart(2, '0');
              const day = date.getDate().toLocaleString().padStart(2, '0');
              const hour= date.getHours().toLocaleString().padStart(2, '0');
              const minutes= date.getMinutes().toLocaleString().padStart(2, '0');
              const seconds= date.getSeconds().toLocaleString().padStart(2, '0');
      
              return `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`
            } else {
              return 'Невозможно установить дату'
            }
          }
    }
}