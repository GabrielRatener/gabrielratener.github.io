
const fs = require('fs');
const pug = require('pug');
const yaml = require('js-yaml');

const readData = (fileName) => {
    const path = `${__dirname}/data/${fileName}.yaml`;

    const fileString = fs.readFileSync(path, {
        encoding: 'utf8'
    });

    const data = yaml.safeLoadAll(fileString);

    if (Array.isArray(data)) {
        return data[0];
    } else {
        return data;
    }
}

const parseDate = (date, level = 2) => {
    const [day, month, year] =
        date.split('-').map((part) => parseInt(part, 10));

    switch(level) {
        case 1:
            return year;
        case 2:
            return `${months[month - 1]} ${year}`;
        case 3:
            return `${months[month - 1]} ${day}, ${year}`;
        default:
            throw new Error("Oops!");
    }
}

const createPugFile = (name, data) => {
    const inFile = `${__dirname}/templates/${name}.pug`;
    const outFile = `${__dirname}/public/${name}.html`;

    const rendered = pug.renderFile(inFile, data);

    fs.writeFileSync(outFile, rendered, 'utf8');
}

const fn = {
    dateRange(dates, level = 2) {
        
        if (dates.length === 1) {
            return `${parseDate(dates[0], level)} - Present`;
        } else {
            return dates.map((date) => parseDate(date, level))
                .join(' - ');
        }
    },

    phone(unformatted) {
        const area = unformatted.slice(0, 3);
        const middle = unformatted.slice(3, 6);
        const last = unformatted.slice(6);

        return `(${area}) ${middle} - ${last}`;
    },

    portfolioImage(name) {

        const dir = `images/portfolio`;

        if (name.endsWith('.jpg') || name.endsWith('.png')) {
            return `${dir}/${name}`;
        } else {
            return `${dir}/${name}.png`;
        }
    }
}

const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
]

const navigation = [
    {
        name: 'resume',
        title: 'Resume',
        link: 'resume.html'
    },
    {
        name: 'portfolio',
        title: 'Portfolio',
        link: 'portfolio.html'
    },
    {
        name: 'contact',
        title: 'Contact',
        link: 'contact.html'
    }
]

const pages = [
    {
        name: 'index',
        title: "Home",
        render(makeContext) {

            const {image, about} = readData('bio');
            const {list: services} = readData('services');

            createPugFile(this.name, makeContext({
                details: {
                    image,
                    about,
                    services
                }
            }))
        }
    },

    {
        name: 'resume',
        render(makeContext) {

            createPugFile(this.name, makeContext({
                resume: readData(this.name)
            }))
        }
    },
    {
        name: 'portfolio',
        render(makeContext) {
            
            createPugFile(this.name, makeContext({
                portfolio: readData(this.name)
            }))
        }
    },

    {
        name: 'contact',
        render(makeContext) {
            
            const contact = readData(this.name);

            createPugFile(this.name, makeContext({contact}))
        }
    }
]

for (const page of pages) {
    const {name, title} = page;

    const initialData = {
        name,
        title: title || [name[0].toUpperCase(), ...name.slice(1)].join('')
    }

    const makeContext = (data) => {
        return {
            fn,
            navigation,

            ...initialData,
            ...data
        }
    }

    page.render(makeContext);
}
