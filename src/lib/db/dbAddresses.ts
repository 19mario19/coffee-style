import california from "$lib/img/Contact/1.jpg"
import london from "$lib/img/Contact/2.jpg"

enum Weekday {
  Mon = "Mon",
  Tue = "Tue",
  Wed = "Wed",
  Thu = "Thu",
  Fri = "Fri",
  Sat = "Sat",
  Sun = "Sun",
}
enum Hour {
  H00 = "00",
  H01 = "01",
  H02 = "02",
  H03 = "03",
  H04 = "04",
  H05 = "05",
  H06 = "06",
  H07 = "07",
  H08 = "08",
  H09 = "09",
  H10 = "10",
  H11 = "11",
  H12 = "12",
  H13 = "13",
  H14 = "14",
  H15 = "15",
  H16 = "16",
  H17 = "17",
  H18 = "18",
  H19 = "19",
  H20 = "20",
  H21 = "21",
  H22 = "22",
  H23 = "23",
}
enum Minutes {
  M00 = "00",
  M15 = "15",
  M30 = "30",
  M45 = "45",
}
type Time = {
  hour: Hour
  minutes: string
}
type TimeRange = {
  from: {
    day: Weekday
    hour: Time
  }
  to: {
    day: Weekday
    hour: Time
  }
}
type DailyOpeningTime = {
  day: Weekday
  startTime: Time
  endTime: Time
}

type Address = {
  id: number | string
  img: string
  country: string
  fullCity: string
  place: {
    name: string
    city: string
    postcode: string | number
  }
  openingTimes: {
    openingTimesDaily: DailyOpeningTime[]
    openingTimesRange: TimeRange[]
  }
}

const addresses: Address[] = [
  {
    id: 0,
    img: london,
    country: "UNITED KINGDOM",
    fullCity: "Canary Wharf, London",
    place: {
      name: "Jubilee Place",
      city: "London",
      postcode: "E14 5NY",
    },
    openingTimes: {
      openingTimesDaily: [
        {
          day: Weekday.Sat,
          startTime: { hour: Hour.H09, minutes: Minutes.M00 },
          endTime: { hour: Hour.H20, minutes: Minutes.M00 },
        },
        {
          day: Weekday.Sun,
          startTime: { hour: Hour.H12, minutes: Minutes.M00 },
          endTime: { hour: Hour.H18, minutes: Minutes.M00 },
        },
      ],
      openingTimesRange: [
        {
          from: {
            day: Weekday.Mon,
            hour: { hour: Hour.H08, minutes: Minutes.M00 },
          },
          to: {
            day: Weekday.Fri,
            hour: { hour: Hour.H22, minutes: Minutes.M00 },
          },
        },
      ],
    },
  },
  {
    id: 1,
    img: california,
    country: "UNITED STATES",
    fullCity: "Venice Beach, California",
    place: {
      name: "9219 Old Kingston Street South",
      city: "El Monte, CA",
      postcode: "91733",
    },
    openingTimes: {
      openingTimesDaily: [
        {
          day: Weekday.Sun,
          startTime: { hour: Hour.H10, minutes: Minutes.M00 },
          endTime: { hour: Hour.H19, minutes: Minutes.M00 },
        },
      ],
      openingTimesRange: [
        {
          from: {
            day: Weekday.Mon,
            hour: { hour: Hour.H09, minutes: Minutes.M00 },
          },
          to: {
            day: Weekday.Wed,
            hour: { hour: Hour.H21, minutes: Minutes.M00 },
          },
        },
        {
          from: {
            day: Weekday.Thu,
            hour: { hour: Hour.H09, minutes: Minutes.M00 },
          },
          to: {
            day: Weekday.Sat,
            hour: { hour: Hour.H22, minutes: Minutes.M00 },
          },
        },
      ],
    },
  },
]

export { addresses }

export type { Address }
