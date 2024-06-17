import moment from "moment";
import "moment-timezone";

export default class Time {
    static timezone = 'Asia/Bangkok';

    static now() {
        return Date.now();
    }

    static timeOfDay(timestamp: number) {
        return moment.tz(timestamp, this.timezone).format('h:mm A');
    }

    static dayOfWeek(timestamp: number) {
        return moment.tz(timestamp, this.timezone).format('dddd');
    }

    static dayOfYear(timestamp: number) {
        return moment.tz(timestamp, this.timezone).format('MMMM DD');
    }

    static dayOfLife(timestamp: number) {
        return moment.tz(timestamp, this.timezone).format('MMM DD, YYYY');
    }

    static getYear(timestamp: number) {
        return moment.tz(timestamp, this.timezone).format('YYYY');
    }

    static timeFormat(timestamp: number) {
        const timestampMoment = moment(timestamp);

        const today = moment().startOf('day');
        if (timestampMoment.isSame(today, 'day')) {
            return this.timeOfDay(timestamp);
        } //If today

        const yesterday = moment().subtract(1, 'days').startOf('day');
        if (timestampMoment.isSame(yesterday, 'day')) {
            return 'Yesterday';
        } //If yesterday

        const startOfWeek = moment().startOf('week');
        const endOfWeek = moment().endOf('week');
        if (timestampMoment.isBetween(startOfWeek, endOfWeek, 'day', '[]')) {
            return this.dayOfWeek(timestamp);
        } //If this week

        const startOfYear = moment().startOf('year');
        if (timestampMoment.isSameOrAfter(startOfYear, 'year')) {
            return this.dayOfYear(timestamp);
        }
        
        return this.dayOfLife(timestamp);
    }
}