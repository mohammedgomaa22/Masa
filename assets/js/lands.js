// البيانات الخاصة بالأراضي
const landsData = {
    agricultural: [
        {
            id: 1,
            image: "./assets/images/m-1.jpeg",
            region: "منطقة القصيم",
            title: "قطعة أرض بالنبهانية بمساحة 151350 متر مربع",
            details: {
                description: "حدود وأطوال ومساحة الأرض",
                boundaries: [
                    "الشمال يحدة مزرعة بطول بيدأ من الشرق للجنوب بطول 118م",
                    "الشمال يحدة مزرعة بطول بيدأ من الشرق للجنوب بطول 118م",
                    "الشمال يحدة مزرعة بطول بيدأ من الشرق للجنوب بطول 118م"
                ]
            },
            status: true,
            price: "1.5 ريال للمتر",
            links: {
                aerial: "https://www.youtube.com/watch?si=DKqd-YqLjFhSlcap&v=My9vsUeXK30&feature=youtu.be",
                location: "https://www.google.com/maps?q=25.745250,42.776944&entry=gps&g_ep=CAESCjExLjE0OC4xMDUYACDXggMqfiw5NDI0MTEzOSw5NDI0MjU2Miw5NDIyMzI5OSw5NDIxNjQxMyw5NDIxMjQ5Niw5NDIwNzM5NCw5NDIwNzUwNiw5NDIwODUwNiw5NDIxNzUyMyw5NDIxODY1Myw5NDIyOTgzOSw0NzA4NzExOCw0NzA4NDM5Myw5NDIxMzIwMEICU0E%3D&shorturl=1"
            }
        },
        {
            id: 2,
            image: "./assets/images/m-2.jpeg",
            region: "منطقة القصيم",
            title: "قطعة أرض رقم 29 من المخطط الزراعي بالعقيلة محافظة الرس بمساحة ١٩٦٤٨,٥ متر مربع",
            details: {
                description: "حدود وأطوال ومساحة الأرض",
                boundaries: [
                    "الشمال: يحده شارع عرض ٢٠ متر بطول ١١١٦ متر.",
                    "الجنوب: يحده قطعة رقم ١٠ بطول ١٨١٤ متر.",
                    "الشرق: يحده مزرعة بطول ١٠٩١ متر.",
                    "الغرب: يحده شارع عرض ٢٠ متر بطول ١٠٠ متر.",
                    "بئر مياه - عداد الكهرباء - نخل - اسفلت - استراحة"
                ]
            },
            status: true,
            price: "1,000,000 ريال",
            links: {
                aerial: "https://youtu.be/gneCtknveOs?si=6a04O-iPqqIoF_PX",
                location: "https://maps.app.goo.gl/V4FnNtLDS1e24Y2q9"
            }
        },
        {
            id: 3,
            image: "./assets/images/m-3.jpeg",
            region: "منطقة القصيم",
            title: "مزرعة البدائع مساحة ٥٨٤٧٦٧ متر",
            details: {
                description: "حدود وأطوال ومساحة الأرض",
                boundaries: [
                    "الشمال يحده شارع عرض ٢٠ م بطول ٣٢٠ م.",
                    "الجنوب يحده شارع عرض ٢٠ م يبدأ من الشرق بطول ٢١٩.٥م ثم ينكسر إلى اليمين ٨٣.٤٥ م ثم ينكسر يسار ٩٦٥٤م ثم ينكسر يسار ١٩٢ م مجموع ٢٢٤٧م.",
                    "الشرق يحده مزرعة يبدأ من الشمال بطول ٧٠٠١٥م ثم ينكسر يسار ٨٥٤,٥٥ م.",
                    "الغرب يحده شارع عرض ٢٠م بطول ١١٦,٩٤م."
                ]
            },
            status: true,
            price: "1.5 ريال للمتر",
            links: {
                aerial: "https://youtu.be/ZhL5gmktldY?si=Uf67rgccol8qg6Nb",
                location: "https://goo.gl/maps/JjRFBhznoDHwR5BA8"
            }
        },
        {
            id: 4,
            image: "./assets/images/m-5.jpeg",
            region: "منطقة القصيم",
            title: "مزرعة غرب القصيم بمساحة ٢١٥٠٥٦٩ متر",
            details: {
                description: "حدود وأطوال ومساحة الأرض",
                boundaries: [
                    "شمال: مزرعة بطول ١٥٣ متر",
                    "جنوب: أرض فضاء بطول ٣٧٣ متر",
                    "شرق: شارع بعرض ١٠٠م بطول ٨٥٩ متر",
                    "غرب: شارع عرض ٥٠م بطول ٧٩٥ متر"
                ]
            },
            status: true,
            price: "2.5 ريال للمتر",
            links: {
                aerial: "https://youtu.be/P7mN36v5pjk?si=RgQC0IvrzhtlYKIm",
                location: "https://goo.gl/maps/8dCjQXj5xvWnDvKt5"
            }
        },
        {
            id: 5,
            image: "./assets/images/m-6.jpeg",
            region: "منطقة القصيم",
            title: "قصر بن عقيل الخشيبي بمساحة 173653 متر",
            details: {
                description: "حدود وأطوال ومساحة الأرض",
                boundaries: [
                    "الشمال: يحدها شارع بعرض 20 متر.",
                    "الجنوب: يحدها أرض بطول 188 متر ثم ينحني شرقًا بمسافة 92 مترًا، ثم ينحني شمالًا بمسافة 52 مترًا، وأخيرًا ينحني شرقًا بمسافة 226 مترًا.",
                    "الشرق: يحدها شارع بعرض متغير وهضبة جبلية بطول 276 متر.",
                    "الغرب: يحدها وادي (شعيب البطاح) بطول 210 أمتار ثم ينحني بمسافة 64 مترًا.",
                    "بئر مياه، عداد كهرباء، أسفلت، استراحة للإيجار، نخل."
                ]
            },
            status: true,
            price: "2 ريال للمتر",
            links: {
                aerial: "https://youtu.be/vKx3kHNNsEo?si=QcKsPC_5J1LlOlxR",
                location: ""
            }
        },
        {
            id: 6,
            image: "./assets/images/m-7.jpeg",
            region: "منطقة القصيم",
            title: "مزرعة شرق حائل جنين بمساحة 479,070,45 متر",
            details: {
                description: "المميزات",
                boundaries: [
                    "تقع على طريق حائل - حفر الباطن الجديد",
                    "مناسبة للمشاريع وتربية المواشي",
                    "مناسبة للمخيمات والتخييم"
                ]
            },
            status: true,
            price: "2 ريال للمتر",
            links: {
                aerial: "https://youtu.be/qrSTVbKgyg4?si=OQwKNyUtxUAvVKkQ",
                location: "https://maps.app.goo.gl/qbBDr2QtxLa3EhRs8"
            }
        },
        {
            id: 7,
            image: "./assets/images/m-8.jpeg",
            region: "منطقة البكيرية",
            title: "مزرعة للبيع بمساحة 385,080 متر",
            details: {
                description: "المميزات",
                boundaries: [
                    "تقع بالقرب من مركز ساق",
                    "غرف ومباني",
                    "مستودع اعلاف",
                    "بئر ماء",
                    "صك الكتروني محدث"
                ]
            },
            status: true,
            price: "800,000 ريال",
            links: {
                aerial: "https://youtu.be/gBbbLwtOHPM?si=tbN4gVkosHr-JLsM",
                location: "https://maps.app.goo.gl/wrakiZuyKNkeoPF27"
            }
        },
        {
            id: 8,
            image: "./assets/images/m-9.jpeg",
            region: "خط الكويت",
            title: "مزرعة للبيع على خط الكويت",
            details: {
                description: "حدود وأطوال ومساحة الأرض",
                boundaries: [
                    "الشمال: يحدها قطعة 9 بطول 100 متر.",
                    "جنوبا: طريق العام 60م بطول: 50 متر",
                    "الشرق: يحدها شارع بعرض متغير وهضبة جبلية بطول 276 متر.",
                    "شرقا: قطعة 7 بطول 100 متر",
                    "غربا: شارع عرض 20م بطول 50 متر"
                ]
            },
            status: true,
            price: "400,000 ريال",
            links: {
                aerial: "https://youtube.com/shorts/iFmJB02zPoA?si=B4ktalEzly2_imjx",
                location: "https://maps.google.com/maps?q=26.575010299682617%2C45.33921813964844&z=17&hl=en"
            }
        },
        {
            id: 9,
            image: "./assets/images/sale.png",
            region: "منطقة القصيم",
            title: "مزرعة 20 الف متر النبهانية",
            details: {
                description: "حدود وأطوال ومساحة الأرض",
                boundaries: [
                    "الشمال: 100 متر.",
                    "جنوبا: ارض فضاء بطول: 75 متر",
                    "الشرق: 245 متر."
                ]
            },
            status: false,
            price: "120,000 ريال",
            links: {
                aerial: "https://youtu.be/Rgqp6ff3k7E?si=qYDHPjEn818o2nUO",
                location: "https://maps.google.com/maps?q=25.65922737121582%2C42.935237884521484&z=17&hl=en"
            }
        },
        {
            id: 10,
            image: "./assets/images/m-11.jpeg",
            region: "منطقة حائل",
            title: "مزرعة حفر الباطن الجديد بمساحة 570 الف متر",
            details: {
                description: "المميزات",
                boundaries: [
                    "تقع على طريق حائل",
                    "موقع مناسب للاستثمار",
                    "مناسبة للمخيمات والتنزه البري"
                ]
            },
            status: true,
            price: "2 ريال للمتر",
            links: {
                aerial: "https://youtu.be/B3Hh92EomdM?si=4iYTDgqWzYu_zJ3s",
                location: "https://maps.app.goo.gl/ryE5i7mrs5KwD5BC9"
            }
        },
        {
            id: 11,
            image: "./assets/images/m-9.jpeg",
            region: "مزرعة",
            title: "مزرعة للبيع بمساحة 2,000,000 متر",
            details: {
                description: "حدود وأطوال ومساحة الأرض",
                boundaries: [
                    "شمالا: يحده حرم بطول 1470 م.",
                    "جنوبا: يحده شارع بعرض 50م وبطول 1960 م.",
                    "شرقا: يحده شارع بعرض 50م وبطول 1240 م.",
                    "غربا: يحده شارع بعرض 50م وبطول 1140 م."
                ]
            },
            status: true,
            price: "",
            links: {
                aerial: "",
                location: ""
            }
        },
        {
            id: 12,
            image: "./assets/images/m-9.jpeg",
            region: "مزرعة",
            title: "مزرعة للبيع بمساحة 116,666 متر",
            details: {
                description: "حدود وأطوال ومساحة الأرض",
                boundaries: [
                    "شمالا: يحده قطعة بطول 500 م.",
                    "جنوبا: يحده شارع بعرض 50م وبطول 500 م.",
                    "شرقا: يحده شارع بعرض 50م وبطول 233,333 م.",
                    "غربا: يحده شارع بعرض 50م وبطول 233,333 م."
                ]
            },
            status: true,
            price: "",
            links: {
                aerial: "",
                location: ""
            }
        },
        {
            id: 13,
            image: "./assets/images/m-9.jpeg",
            region: "مزرعة",
            title: "مزرعة للبيع بمساحة 180,000 متر",
            details: {
                description: "حدود وأطوال ومساحة الأرض",
                boundaries: [
                    "شمالا: يحده شارع بعرض 10 م وبطول 400.7 م.",
                    "جنوبا: يحده مجرى السيل بطول 430 م.",
                    "شرقا: يحده شارع بعرض 10 م وبطول 203 م."
                ]
            },
            status: true,
            price: "",
            links: {
                aerial: "",
                location: ""
            }
        },
        {
            id: 14,
            image: "./assets/images/m-9.jpeg",
            region: "مزرعة",
            title: "مزرعة للبيع بقرية عنز بمساحة 831800 متر",
            details: {
                description: "المميزات",
                boundaries: [
                    "بئر وبرك ماء",
                    "عداد كهرباء",
                    "صك الكتروني"
                ]
            },
            status: true,
            price: "1.25 ريال للمتر",
            links: {
                aerial: "",
                location: ""
            }
        },
        {
            id: 15,
            image: "./assets/images/m-9.jpeg",
            region: "منطقة القصيم",
            title: "مزرعة للبيع بمساحة 72850 متر",
            details: {
                description: "المميزات",
                boundaries: [
                    "بين عدة مزارع مجاورة",
                    "بالقرب من مخطط ضاحية الملز بعنيزة",
                    "عداد كهرباء",
                    "صك الكتروني"
                ]
            },
            status: true,
            price: "",
            links: {
                aerial: "",
                location: ""
            }
        },
        {
            id: 16,
            image: "./assets/images/m-9.jpeg",
            region: "منطقة القصيم",
            title: "مزرعة للبيع بمساحة 112647 متر",
            details: {
                description: "المميزات",
                boundaries: [
                    "بالقرب من مركز الطرفية الغربية",
                    "بئر ماء",
                    "عداد كهرباء"
                ]
            },
            status: true,
            price: "",
            links: {
                aerial: "",
                location: ""
            }
        },
        {
            id: 17,
            image: "./assets/images/m-9.jpeg",
            region: "منطقة القصيم",
            title: "مزرعة للبيع بمساحة 291424 متر",
            details: {
                description: "المميزات",
                boundaries: [
                    "بالقرب من طريق المدينة القصيم السريع",
                    "خزان ماء خرساني",
                    "عداد كهرباء"
                ]
            },
            status: true,
            price: "2 ريال للمتر",
            links: {
                aerial: "",
                location: ""
            }
        },
        {
            id: 18,
            image: "./assets/images/m-9.jpeg",
            region: "منطقة القصيم",
            title: "مزرعة للبيع بمساحة 16140 متر",
            details: {
                description: "المميزات",
                boundaries: [
                    "بجانب المخطط السكني",
                    "صك الكتروني محدث",
                    "عداد كهرباء"
                ]
            },
            status: true,
            price: "",
            links: {
                aerial: "",
                location: ""
            }
        },
        {
            id: 19,
            image: "./assets/images/m-9.jpeg",
            region: "منطقة القصيم",
            title: "مزرعة للبيع بمساحة 30271 متر",
            details: {
                description: "المميزات",
                boundaries: [
                    "بالقرب من طريق المدينة القديم",
                    "بجانب المخطط السكني",
                    "بئر ماء",
                    "عداد كهرباء"
                ]
            },
            status: true,
            price: "",
            links: {
                aerial: "",
                location: ""
            }
        },
        {
            id: 20,
            image: "./assets/images/sale.png",
            region: "منطقة القصيم",
            title: "مزرعة للبيع في قرية البدع بمساحة 11776 متر",
            details: {
                description: "حدود وأطوال ومساحة الأرض",
                boundaries: [
                    "الشمال: يحدها قطعة رقم 22 بطول 116 متر.",
                    "جنوبا: شارع بعرض 15 م بطول: 161 متر",
                    "الشرق: يحدها شارع بعرض 15 م بطول 85 متر.",
                    "غربا: شارع عرض 20م بطول 96 متر"
                ]
            },
            status: false,
            price: "10 ريال للمتر",
            links: {
                aerial: "",
                location: "https://maps.app.goo.gl/pvV9W5Lp3g5m1ZRNA?g_st=iw"
            }
        },
        {
            id: 21,
            image: "./assets/images/m-9.jpeg",
            region: "حي القصيم",
            title: "مزرعة للبيع بمساحة 385,060 متر",
            details: {
                description: "المميزات",
                boundaries: [
                    "تقع بالقرب من مركز ساق الجوا",
                    "غرف ومباني",
                    "مستودع أعلاف",
                    "بئر ماء",
                    "صك الكتروني محدث"
                ]
            },
            status: true,
            price: "",
            links: {
                aerial: "",
                location: ""
            }
        },
        {
            id: 22,
            image: "./assets/images/m-9.jpeg",
            region: "أرض زراعية",
            title: "مزرعة للبيع بمساحة 2,000,000 متر",
            details: {
                description: "حدود وأطوال ومساحة الأرض",
                boundaries: [
                    "شمالا: قطعة رقم 1 بطول 1,870 م",
                    "جنوبا: شارع بعرض 50 م وبطول 315 م",
                    "شرقا: حرم بعرض 100 م وبطول 1,170",
                    "غربا: قطعة رقم 2 بطول 1,050"
                ]
            },
            status: true,
            price: "55 هللة صافي",
            links: {
                aerial: "",
                location: ""
            }
        },
        {
            id: 23,
            image: "./assets/images/m-9.jpeg",
            region: "أرض زراعية",
            title: "مزرعة للبيع بمساحة 200,000 متر",
            details: {
                description: "حدود وأطوال ومساحة الأرض",
                boundaries: [
                    "شمالا: قطعة رقم 14 بطول 600 م",
                    "جنوبا: قطعة رقم 16 زالقطعة رقم 17 وبطول 650 م",
                    "شرقا: قطعة رقم 13 وبطول 300 م",
                    "غربا: شارع عرض 50 م بطول 200 م"
                ]
            },
            status: true,
            price: "",
            links: {
                aerial: "",
                location: "https://maps.app.goo.gl/RtXSECyp4tT1jM7L6"
            }
        },
        {
            id: 24,
            image: "./assets/images/m-9.jpeg",
            region: "أرض زراعية",
            title: "مزرعة للبيع مخطط استراحات ربوة الشنانه بمساحة 1050 متر",
            details: {
                description: "حدود وأطوال ومساحة الأرض",
                boundaries: [
                    "الشمال: قطعة رقم 73 بطول 30 مترًا.",
                    "الجنوب: شارع بعرض 15 مترًا بطول 30 مترًا.",
                    "الشرق: قطعة رقم 76 بطول 35 مترًا.",
                    "الغرب: قطعة رقم 72 بطول 35 مترًا."
                ]
            },
            status: true,
            price: "100,000 ريال شاملة",
            links: {
                aerial: "",
                location: "https://maps.google.com/maps?q=25.80514907836914%2C43.40204620361328&z=17&hl=en"
            }
        },
        {
            id: 25,
            image: "./assets/images/m-9.jpeg",
            region: "أرض زراعية",
            title: "مزرعة للبيع مركز الخاصرة بمساحة 650 متر",
            details: {
                description: "حدود وأطوال ومساحة الأرض",
                boundaries: [
                    "شمالاً: قطعة رقم 424 بطول 25 متر.",
                    "جنوباً: قطعة رقم 428 بطول 25 متر.",
                    "شرقاً: قطعة رقم 425 بطول 26 متر.",
                    "غرباً: شارع بعرض 30 متر وبطول 26 متر."
                ]
            },
            status: true,
            price: "50 سكني 60 تجاري صافي",
            links: {
                aerial: "",
                location: ""
            }
        },
        {
            id: 26,
            image: "./assets/images/m-9.jpeg",
            region: "حي الصبيح",
            title: "مزرعة للبيع بمساحة 242,500 متر",
            details: {
                description: "حدود وأطوال ومساحة الأرض",
                boundaries: [
                    "شمالاً: شارع بعرض 15 م بطول 500 متر.",
                    "جنوباً: ملك بطول 500 متر.",
                    "شرقاً: ملك بطول 485 متر.",
                    "غرباً: ملك بطول 485 متر."
                ]
            },
            status: true,
            price: "400,000 ريال",
            links: {
                aerial: "",
                location: ""
            }
        },
        {
            id: 27,
            image: "./assets/images/m-9.jpeg",
            region: "أرض زراعية",
            title: "مزرعة للبيع بمساحة 291424 متر",
            details: {
                description: "المميزات",
                boundaries: [
                    "الأرض مسورة ومحاطة بعقم ترابي.",
                    "يوجد بها عداد كهرباء.",
                    "يوجد بها خزان ماء خرساني."
                ]
            },
            status: true,
            price: "2 ريال للمتر",
            links: {
                aerial: "https://drive.google.com/file/d/1LWWPBreQse9L9TrsXdNM1UoZYgQ53xZI/view",
                location: "https://maps.app.goo.gl/zU8KrzpLZzLoN49v7?g_st=iw"
            }
        },
        {
            id: 28,
            image: "./assets/images/m-9.jpeg",
            region: "أرض زراعية",
            title: "مزرعة للبيع بمساحة 16140 متر",
            details: {
                description: "المميزات",
                boundaries: [
                    "صك الكتروني محدث",
                    "يوجد بها عداد كهرباء.",
                    "يوجد بها خزان ماء خرساني."
                ]
            },
            status: true,
            price: "",
            links: {
                aerial: "https://drive.google.com/file/d/1v8HIREVmUqtkg8ClPNWL-l_mOLzSYhCT/view",
                location: "https://maps.app.goo.gl/uJyo9xHod8QK9u3W9?g_st=iw"
            }
        },
        {
            id: 29,
            image: "./assets/images/m-9.jpeg",
            region: "أرض زراعية",
            title: "مزرعة للبيع بمساحة 30271 متر",
            details: {
                description: "المميزات",
                boundaries: [
                    "يوجد بها عداد كهرباء.",
                    "يوجد بها بئر ماء."
                ]
            },
            status: true,
            price: "",
            links: {
                aerial: "https://drive.google.com/file/d/1WagL2oDZMKN0danemopxk65dvrIil74t/view",
                location: "https://maps.app.goo.gl/Ann2qfZ5hyySr83A8?g_st=iw"
            }
        },
        {
            id: 30,
            image: "./assets/images/m-9.jpeg",
            region: "أرض زراعية",
            title: "مزرعة للبيع بمساحة 112647 متر",
            details: {
                description: "المميزات",
                boundaries: [
                    "يوجد بها عداد كهرباء.",
                    "يوجد بها بئر ماء."
                ]
            },
            status: true,
            price: "",
            links: {
                aerial: "https://drive.google.com/file/d/157LUUTwTWmJ9BzdznMfxfid7gVuAe8XU/view",
                location: "https://maps.app.goo.gl/N37yhiq1BcToynSq6?g_st=iw"
            }
        },
        {
            id: 31,
            image: "./assets/images/m-9.jpeg",
            region: "أرض زراعية",
            title: "مزرعة للبيع بمساحة 850,000 متر",
            details: {
                description: "المميزات",
                boundaries: [
                    "مناسبة لمشاريع الاسماك والخضار",
                    "مناسبة للسياحة والمنتجعات",
                    "مناسبة لتربية المواشي",
                    "تقبل القروض الزراعية والسياحية",
                    "صك الكتروني - سكن",
                    "آبار ماء",
                    "يوجد بها عداد كهرباء.",
                    "مستودع - معقمة بشبك - رخصة زراعية"
                ]
            },
            status: true,
            price: "1.5",
            links: {
                aerial: "https://drive.google.com/drive/folders/1_RmUym79ZC_MtYqQrSiZhjpLQqzsYB8w",
                location: "https://www.google.com/maps/place/26%C2%B051'24.8%22N+43%C2%B028'14.5%22E/@26.8568954,43.4728793,1076m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d26.8568954!4d43.4706906?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D"
            }
        },
        {
            id: 32,
            image: "./assets/images/m-33.jpeg",
            region: "أرض زراعية",
            title: "مزرعة للبيع بمساحة 50,000 متر",
            details: {
                description: "حدود وأطوال ومساحة الأرض",
                boundaries: [
                    "شمالاً: شارع عرض 20م ثم الضليع بطول: (200)",
                    "جنوباً: باقي الملك ثم أرض بيضاء بطول: (200)",
                    "شرقاً: باقي الملك ثم أراض حمدان بن رباح بطول: (250)",
                    "غرباً: باقي الملك ثم أرض بيضاء بطول: (250)"
                ]
            },
            status: true,
            price: "120,000 ريال",
            links: {
                aerial: "",
                location: "https://www.google.com/maps?q=25.761859893798828,42.81533432006836&z=17&hl=en"
            }
        },
        {
            id: 33,
            image: "./assets/images/m-9.jpeg",
            region: "الفوارة",
            title: "مزرعة غرب القصيم للبيع بمساحة 99,000 متر",
            details: {
                description: "حدود وأطوال ومساحة الأرض",
                boundaries: [
                    "شمالاً: بطول 200م",
                    "جنوباً: شارع بطول: 165م وعرض 30م",
                    "شرقاً: بطول 500 م",
                    "غرباً: شارع بطول 472م وعرض 6م"
                ]
            },
            status: true,
            price: "",
            links: {
                aerial: "https://drive.google.com/drive/folders/1GDsm4Gof9ZFTEY8qVgRPLP1p_RqHr1Ax",
                location: "https://www.google.com/maps?q=26.052413,42.693149&entry=gps&g_ep=CAESCjExLjEzNC4xMDQYACDXggMqWiw5NDIyNjk2OSw5NDIxMjQ5Niw5NDIxMjY2NSw5NDIwNzUwNiw5NDIwODUwNiw5NDIxNzUyMyw5NDIxODY1Myw0NzA4NzExOCw0NzA4NDM5Myw5NDIxMzIwMEICU0E%3D&shorturl=1"
            }
        },
        {
            id: 34,
            image: "./assets/images/m-9.jpeg",
            region: "ابها  - طريب -  المضة",
            title: "ارض زراعيه للبيع - مباشر - مساحة  ٢٠.٠٠٠  متر مربع",
            details: {
                description: "حدود وأطوال ومساحة الأرض",
                boundaries: [
                    "قطعة رقم  ١٣٨",
                    "مخطط رقم ١٩١",
                    "تفتح على شارع جنوبي بعرض ٥٠ متر",
                    "صك إلكتروني يفرغ عن طريق ناجز",
                ]
            },
            status: true,
            price: "100,000 صافي",
            links: {
                aerial: "",
                location: "https://maps.google.com/?q=18.702187,43.327087"
            }
        },
        {
            id: 35,
            image: "./assets/images/m-9.jpeg",
            region: "الخرج",
            title: "أرض للبيع في الشديدة - الخرج <br> المساحة: 154,000 متر مربع",
            details: {
                description: "حدود وأطوال ومساحة الأرض",
                boundaries: [
                    "الصكوك: محدثة وسليمة على 3 صكوك",
                    "الوصول: الزفلـت يصل حتى المزارع، وبعدها الطريق يصبح ترابي لمسافة بسيطة",
                    "المرافق: يوجد في الأرض 3 غرف، ارتواز 200 متر ومعقمة، مع شبكة مياه وفيرة بنسبة أملاح قليلة (مناسبة للزراعة)",
                    "الجيران: مزارع قائمة في المنطقة",
                    "الموقع الاستراتيجي: المنطقة بالقرب من المخطط السكني للقطار (مسافة 5 كم)",
                ]
            },
            status: true,
            price: "80 ريال للمتر (يمكن التفاوض مع المشتري الجاد)",
            links: {
                aerial: "",
                location: "https://maps.app.goo.gl/Gma8jvSkzRJUAgVE7?g_st=com.google.maps.preview.copy"
            }
        },
        {
            id: 36,
            image: "./assets/images/m-36.jpeg",
            region: "غرب سدير",
            title: "للبيع قطعة أرض في قصر ابن عقيل – غرب سدير، مخطط استراحات روضة الشتاء. <br> المساحة 1,050 م²",
            details: {
                description: "حدود وأطوال ومساحة الأرض",
                boundaries: [
                    "شمالًا: قطعة رقم 73 بطول 30 م",
                    "جنوبًا: شارع بعرض 15 م بطول 30 م",
                    "شرقًا: قطعة رقم 76 بطول 35 م",
                    " غربًا: قطعة رقم 72 بطول 35 م",
                    "مساحة كبيرة تناسب جميع الاستخدامات",
                    "واجهة جنوبية على شارع بعرض 15 متر",
                    "موقع هادئ ومناسب لبناء استراحة أو سكن خاص",
                    "إطلالة مفتوحة مع جو هادئ بعيد عن الضوضاء ",
                    "فرصة رائعة للاستثمار بسعر مناسب جدًا",
                ]
            },
            status: true,
            price: "100,000 ريال!",
            links: {
                aerial: "",
                location: "https://maps.google.com/maps?q=25.794889450073242%2C43.39468765258789&z=17&hl=en"
            }
        },
        {
            id: 37,
            image: "./assets/images/m-37.jpeg",
            region: "قرية البدع",
            title: "للبيع أرض زراعية في قرية البدع – مركز قصر ابن عقيل غرب سدير. <br> المساحة 10,250 م²",
            details: {
                description: "حدود وأطوال ومساحة الأرض",
                boundaries: [
                    "شمالًا: قطعة رقم 30 بطول 100 م",
                    "جنوبًا: قطعة رقم 32 بطول 100 م",
                    "شرقًا: شارع بعرض 15 م بطول 102.5 م",
                    "غربًا: شارع بعرض 15 م بطول 102.5 م",
                    "مساحة واسعة جدًا تناسب المشاريع الزراعية والاستراحات",
                    "رض مستوية وجاهزة للاستثمار الزراعي",
                    "واجهتان على شوارع بعرض 15 متر",
                    "موقع هادئ وسط الطبيعة",
                ]
            },
            status: true,
            price: " 125,000 ريال!",
            links: {
                aerial: "",
                location: "https://maps.app.goo.gl/THk11VFpMohfQVum6?g_st=iw"
            }
        },
        {
            id: 38,
            image: "./assets/images/m-9.jpeg",
            region: "حي الحصون – سدير ",
            title: "للبيع أرض سكنية في حي الحصون، سدير <br> المساحة: 338 م²",
            details: {
                description: "حدود وأطوال ومساحة الأرض",
                boundaries: [
                    "شمالًا: قطعة رقم 343 بطول 19.7 م",
                    "جنوبًا: شارع بعرض 15 م بطول 19.2 م",
                    "شرقًا: قطعة رقم 340 بطول 17.5 م",
                    "غربًا: نافذ بعرض 5 م بطول 17.65 م",
                    "موقع استراتيجي في حي هادئ ومميز",
                    "واجهة جنوبية على شارع بعرض 15 متر",
                    "إطلالة مفتوحة غربًا على نافذ عرض 5 متر ",
                    "قطعة مستوية وجاهزة للبناء",
                ]
            },
            status: true,
            price: " 200,000 ريال فقط!",
            links: {
                aerial: "",
                location: ""
            }
        },
        {
            id: 39,
            image: "./assets/images/m-9.jpeg",
            region: "ابها  - طريب -  المضة",
            title: "ارض زراعيه للبيع - مباشر <br> مساحة  ٢٠.٠٠٠  متر مربع",
            details: {
                description: "حدود وأطوال ومساحة الأرض",
                boundaries: [
                    "قطعة رقم  ١٣٨",
                    "مخطط رقم ١٩١",
                    "تفتح على شارع جنوبي بعرض ٥٠ متر",
                    "صك إلكتروني يفرغ عن طريق ناجز",
                ]
            },
            status: true,
            price: "السعر  مئة الف صافي",
            links: {
                aerial: "",
                location: "https://maps.google.com/?q=18.702187,43.327087"
            }
        },
        // {
        //     id: 40,
        //     image: "./assets/images/m-9.jpeg",
        //     region: "",
        //     title: "",
        //     details: {
        //         description: "حدود وأطوال ومساحة الأرض",
        //         boundaries: [
        //             "",
        //             "",
        //             "",
        //             "",
        //         ]
        //     },
        //     status: true,
        //     price: "",
        //     links: {
        //         aerial: "",
        //         location: ""
        //     }
        // },
    ],
    residential: [
        {
            id: 1,
            image: "./assets/images/s-1-7.jpeg",
            region: "أرض سكنية",
            title: "قطعة أرض للبيع بمساحة 750 م",
            details: {
                description: "حدود وأطوال ومساحة الأرض",
                boundaries: [
                    "شمالا: يحده شارع بعرض 25 م وبطول 25 م.",
                    "جنوبا: يحده قطعة رقم 274 وبطول 25 م.",
                    "شرقا: يحده قطعة رقم 271 وبطول 30 م.",
                    "غربا: يحده ممر مشاة بعرض 10 م وبطول 30 م."
                ]
            },
            status: true,
            price: "",
            links: {
                aerial: "",
                location: ""
            }
        },
        {
            id: 2,
            image: "./assets/images/s-1-7.jpeg",
            region: "أرض سكنية",
            title: "قطعة أرض للبيع بمركز الشعب بمساحة 900 م",
            details: {
                description: "حدود وأطوال ومساحة الأرض",
                boundaries: [
                    "شمالا: يحده قطعة رقم 71 بطول 30 م.",
                    "جنوبا: يحده قطعة رقم 75 وبطول 30 م.",
                    "شرقا: يحده قطعة رقم 72 وبطول 30 م.",
                    "غربا: يحده شارع بعرض 30 م وبطول 30 م."
                ]
            },
            status: true,
            price: "",
            links: {
                aerial: "",
                location: ""
            }
        },
        {
            id: 3,
            image: "./assets/images/s-1-7.jpeg",
            region: "أرض سكنية",
            title: "قطعة أرض للبيع بمساحة 1,376.48 م",
            details: {
                description: "حدود وأطوال ومساحة الأرض",
                boundaries: [
                    "شمالا: يحده قطعة رقم 141 بطول 33 م.",
                    "جنوبا: يحده شارع بعرض 10 م وبطول 33 م.",
                    "شرقا: يحده قطعة رقم 144 وبطول 45 م.",
                    "غربا: يحده شارع بعرض 10 م وبطول 32 م."
                ]
            },
            status: true,
            price: "",
            links: {
                aerial: "",
                location: ""
            }
        },
        {
            id: 4,
            image: "./assets/images/s-1-7.jpeg",
            region: "أرض سكنية",
            title: "قطعة أرض للبيع بمساحة 484 م",
            details: {
                description: "حدود وأطوال ومساحة الأرض",
                boundaries: [
                    "شمالا: يحده حديقة وبطول 22 م.",
                    "جنوبا: يحده قطعة رقم 161 وبطول 22 م.",
                    "شرقا: يحده شارع بعرض 15 م وبطول 22 م.",
                    "غربا: يحده قطعة رقم 158 وبطول 22 م."
                ]
            },
            status: true,
            price: "",
            links: {
                aerial: "",
                location: ""
            }
        },
        {
            id: 5,
            image: "./assets/images/s-1-7.jpeg",
            region: "أرض سكنية",
            title: "قطعة أرض للبيع بمساحة 1,322.39 م",
            details: {
                description: "حدود وأطوال ومساحة الأرض",
                boundaries: [
                    "شمالا: يحده قطعة رقم 17 وبطول 44 م.",
                    "جنوبا: يحده رأس مثلث وبطول 0 م.",
                    "شرقا: يحده مجرى سيل وبطول 75 م.",
                    "غربا: يحده شارع بعرض 30 م وبطول 60 م."
                ]
            },
            status: true,
            price: "",
            links: {
                aerial: "",
                location: ""
            }
        },
        {
            id: 6,
            image: "./assets/images/s-1-7.jpeg",
            region: "أرض سكنية",
            title: "قطعة أرض للبيع بحي السعادة بمساحة 1,877.5 م",
            details: {
                description: "حدود وأطوال ومساحة الأرض",
                boundaries: [
                    "شمالا: يحده قطعة رقم 37 وبطول 50 م.",
                    "جنوبا: يحده قطعة رقم 41 وبطول 50 م.",
                    "شرقا: يحده قطعة رقم 40 وبطول 37 م.",
                    "غربا: يحده شارع بعرض 20 م وبطول 37 م."
                ]
            },
            status: true,
            price: "",
            links: {
                aerial: "",
                location: ""
            }
        },
        {
            id: 7,
            image: "./assets/images/s-1-7.jpeg",
            region: "أرض سكنية",
            title: "قطعة أرض للبيع بمساحة 420 م",
            details: {
                description: "حدود وأطوال ومساحة الأرض",
                boundaries: [
                    "شمالا: يحده قطعة رقم 433 وبطول 20 م.",
                    "جنوبا: يحده شارع عرض 15 م وبطول 20 م.",
                    "شرقا: يحده قطعة رقم 432 وبطول 21 م.",
                    "غربا: يحده شارع بعرض 15 م وبطول 21 م."
                ]
            },
            status: true,
            price: "",
            links: {
                aerial: "",
                location: ""
            }
        },
        {
            id: 8,
            image: "./assets/images/s-1-7.jpeg",
            region: "أرض سكنية",
            title: "قطعة أرض للبيع بمساحة 750 م",
            details: {
                description: "حدود وأطوال ومساحة الأرض",
                boundaries: [
                    "شمالا: يحده قطعة رقم 83 وبطول 25 م.",
                    "جنوبا: يحده شارع عرض 15 م وبطول 25 م.",
                    "شرقا: يحده قطعة رقم 82 وبطول 30 م.",
                    "غربا: يحده قطعة رقم 86 وبطول 30 م."
                ]
            },
            status: true,
            price: "السعر: 40 شاملة",
            links: {
                aerial: "",
                location: ""
            }
        },
        {
            id: 9,
            image: "./assets/images/s-1-7.jpeg",
            region: "أرض سكنية",
            title: "قطعة أرض للبيع بمساحة 750 م",
            details: {
                description: "حدود وأطوال ومساحة الأرض",
                boundaries: [
                    "شمالا: يحده قطعة رقم 83 وبطول 25 م.",
                    "جنوبا: يحده شارع عرض 15 م وبطول 25 م.",
                    "شرقا: يحده قطعة رقم 82 وبطول 30 م.",
                    "غربا: يحده قطعة رقم 86 وبطول 30 م."
                ]
            },
            status: true,
            price: "السعر: 50 شاملة تقسيم2",
            links: {
                aerial: "",
                location: ""
            }
        },
        {
            id: 10,
            image: "./assets/images/s-1-7.jpeg",
            region: "أرض سكنية",
            title: "قطعة أرض للبيع بمساحة 1066.65 متر",
            details: {
                description: "حدود وأطوال ومساحة الأرض",
                boundaries: [
                    "الشمال: تقع بجوار قطعة رقم 1347 بطول 39 متر.",
                    "الجنوب: تقع بجوار قطعة رقم 1345 بطول 37 متر.",
                    "الشرق: يحدها شارع بعرض 30 متر.",
                    "الغرب: يحدها فضاء حكومي بطول 28.05 متر."
                ]
            },
            status: true,
            price: "100,000 ريال",
            links: {
                aerial: "",
                location: ""
            }
        },
        {
            id: 11,
            image: "./assets/images/s-1-7.jpeg",
            region: "أرض سكنية",
            title: "قطعة أرض للبيع بمساحة 5,000 متر",
            details: {
                description: "حدود وأطوال ومساحة الأرض",
                boundaries: [
                    "الشمال: قطعة رقم 9 بطول 100 متر.",
                    "الجنوب: طريق 60 م بطول 50 متر.",
                    "الشرق: يحدها قطعة رقم 7 بطول 100 متر.",
                    "الغرب: يحدها شارع بعرض 20 م وبطول 50 متر."
                ]
            },
            status: true,
            price: "",
            links: {
                aerial: "",
                location: ""
            }
        },
        {
            id: 12,
            image: "./assets/images/s-1-7.jpeg",
            region: "أرض سكنية",
            title: "قطعة أرض للبيع بمساحة 625 متر",
            details: {
                description: "حدود وأطوال ومساحة الأرض",
                boundaries: [
                    "الشمال: تقع بجوار قطعة رقم 196 بطول 25 متر.",
                    "الجنوب: تقع بجوار قطعة رقم 198 بطول 25 متر.",
                    "الشرق: يحدها ممر مشاة بطول 25 متر.",
                    "الغرب: يحدها مواقف سيارات بطول 25 متر."
                ]
            },
            status: true,
            price: "110,000 ريال",
            links: {
                aerial: "",
                location: ""
            }
        },
        {
            id: 13,
            image: "./assets/images/s-1-7.jpeg",
            region: "أرض سكنية",
            title: "قطعة أرض للبيع بمساحة 638.6 متر",
            details: {
                description: "حدود وأطوال ومساحة الأرض",
                boundaries: [
                    "الشمال: شارع عرض 30م بطول: (27.62).",
                    "الجنوب: جزء من الجزع رقم 37/4 بطول: (25).",
                    "الشرق: شارع عرض 30م بطول: (20.15).",
                    "الغرب: الجزع رقم 37/2 بطول: (30.18)."
                ]
            },
            status: true,
            price: "180,000 ريال",
            links: {
                aerial: "",
                location: ""
            }
        },
        {
            id: 14,
            image: "./assets/images/s-1-7.jpeg",
            region: "أرض سكنية",
            title: "قطعة أرض للبيع بمساحة 425.4 متر",
            details: {
                description: "حدود وأطوال ومساحة الأرض",
                boundaries: [
                    "الشمال: شارع عرض 30م بطول: (13.96).",
                    "الجنوب: جزء من الجزء رقم 37/4 بطول: (13).",
                    "الشرق: الجزء رقم 37/1 بطول: (30.18).",
                    "الغرب: الجزء رقم 37/3 بطول: (35.26)."
                ]
            },
            status: true,
            price: "120,000 ريال",
            links: {
                aerial: "",
                location: ""
            }
        },
        {
            id: 15,
            image: "./assets/images/s-1-7.jpeg",
            region: "مركز الشواق",
            title: "قطعة أرض للبيع بمساحة 675 متر",
            details: {
                description: "حدود وأطوال ومساحة الأرض",
                boundaries: [
                    "شمالاً: قطعة رقم 2547 بطول: (25)",
                    "جنوباً: قطعة رقم 2543 بطول: (25)",
                    "شرقاً: قطعة رقم 2542 بطول: (27)",
                    "غرباً: شارع عرض 15 متر بطول: (27)"
                ]
            },
            status: true,
            price: "100,000 ريال",
            links: {
                aerial: "",
                location: ""
            }
        },
        {
            id: 16,
            image: "./assets/images/s-1-7.jpeg",
            region: "مركز مصده",
            title: "قطعة أرض للبيع بمساحة 400 متر",
            details: {
                description: "حدود وأطوال ومساحة الأرض",
                boundaries: [
                    "شمالاً: شارع عرض 15 م بطول: (20)",
                    "جنوباً: قطعة رقم 56 بطول: (20)",
                    "شرقاً: قطعة رقم 53 بطول: (20)",
                    "غرباً: قطعة رقم 57 بطول: (20)"
                ]
            },
            status: true,
            price: "",
            links: {
                aerial: "",
                location: ""
            }
        },
        {
            id: 17,
            image: "./assets/images/s-1-7.jpeg",
            region: "مدينة الأرطاوية",
            title: "قطعة أرض للبيع بمساحة 5,000 متر",
            details: {
                description: "حدود وأطوال ومساحة الأرض",
                boundaries: [
                    "شمالاً: قطعة رقم 21 بطول: (100 م)",
                    "جنوباً: قطعة رقم 23 بطول: (100 م)",
                    "شرقاً: طريق عرض 60 م بطول 50 م",
                    "غرباً: شارع عرض 20 م بطول 50 م"
                ]
            },
            status: true,
            price: "450,000 ريال",
            links: {
                aerial: "https://www.youtube.com/shorts/zwZ9MbShYKE",
                location: "https://www.google.com/maps?q=26.5595645904541,45.338558197021484&z=17&hl=en"
            }
        },
    ]
};

// دالة لإنشاء كارد الأرض
function createLandCard(land, index, type) {
    return `
        <div class="card relative" id="${land.id}">
            <span class="card-number h-16 w-16 flex items-center justify-center text-3xl font-extrabold bg-gradient-to-l from-primary to-light text-gray-800 absolute -top-8 right-1/2 translate-x-1/2 z-10"
                style="border-radius: 39% 61% 72% 28% / 30% 39% 61% 70% ;">
                ${index + 1}
            </span>
            <div class="c-card block bg-gradient-to-l from-light to-light_pro shadow-md hover:shadow-lg rounded-lg overflow-hidden duration-500">
                <div class="relative h-56 overflow-hidden">
                    <img class="absolute inset-0 h-full w-full object-cover" src="${land.status ? land.image : './assets/images/sale.png'}" alt="${land.title}">
                </div>
                <div class="p-4">
                    <span class="inline-block px-2 py-[7px] mb-2 leading-none ${land.status ? 'bg-white text-gray-800': 'bg-red-500 text-gray-100'} rounded-full font-semibold uppercase tracking-wide text-xs">
                        ${land.status ? land.region: 'تم البيع'}
                    </span>
                    <h2 class="mt-2 mb-2 font-bold">
                        ${land.title}
                        <span class="block mt-2"> </span>
                    </h2>
                    <ul class="text-sm">
                        <h3 class="font-bold mb-3 relative ps-2 | before:content[''] before:absolute before:-right-1 before:top-[6px] before:h-2 before:w-2 before:rounded-full before:bg-white">
                            حدود ومميزات العقار
                        </h3>
                        ${land.details.boundaries.map(boundary => `
                            <li class="relative mb-2 ps-4 | before:content[''] before:absolute before:right-1 before:top-[6px] before:h-2 before:w-2 before:rounded-full before:bg-white">
                                ${boundary}
                            </li>
                        `).join('')}
                    </ul>
                </div>
                ${land.price ? `
                    <div class="mt-3 flex items-center p-4 border-t border-white">
                        <span class="font-bold text-xl">${land.price}</span>&nbsp;<span class="text-sm font-semibold"></span>
                    </div>                    
                ` : ''}
                <div class="p-4 border-t border-white flex items-center justify-between text-sm text-gray-800">
                    <a href="${land.links.location}" target="_blank" rel="noopener noreferrer" class="flex flex-col items-center gap-2 p-0 h-fit">
                        التصوير الجوي
                        <img src="./assets/images/youtube (1).png" alt="video" height="10" width="70">
                    </a>
                    <a href="${land.links.aerial}" target="_blank" rel="noopener noreferrer" class="flex flex-col items-center gap-2 p-0 h-fit">
                        الموقع
                        <img src="./assets/images/map.png" alt="video" height="10" width="60">
                    </a>
                </div>

            </div>
        </div>
    `;
}

// دالة لعرض الكروت في الصفحة
function renderLandCards() {
    // عرض الأراضي الزراعية
    const agriculturalContainer = document.querySelector('#agricultural-lands .grid');
    if (agriculturalContainer) {
        agriculturalContainer.innerHTML = landsData.agricultural
            .map((land, index) => createLandCard(land, index, 'agricultural'))
            .join('');
    }

    // عرض الأراضي السكنية
    const residentialContainer = document.querySelector('#residential-lands .grid');
    if (residentialContainer) {
        residentialContainer.innerHTML = landsData.residential
            .map((land, index) => createLandCard(land, index, 'residential'))
            .join('');
    }
}

function findLandById(id) {
    return [...landsData.agricultural, ...landsData.residential]
        .find(land => land.id === id);
}

// تنفيذ الدالة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', renderLandCards);
