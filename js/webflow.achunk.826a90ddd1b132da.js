(self.webpackChunk = self.webpackChunk || []).push([
  ["946"],
  {
    6130: function () {
      function e() {
        let e = Webflow.require("ix3");
        e.ready().then(() => {
          let a = e.getInstance();
          a &&
            (a.register(
              [
                {
                  id: "i-04a58984",
                  triggers: [["wf:load", { controlType: "load" }]],
                  timelineIds: ["t-2c3e0366"],
                  deleted: !1,
                },
                {
                  id: "i-3d13bbbd",
                  triggers: [
                    [
                      "wf:hover",
                      {
                        controlType: "standard",
                        pluginConfig: { type: "mouseenter", hover: "each" },
                      },
                      ["wf:class", ["_404-link-block"]],
                    ],
                    [
                      "wf:hover",
                      {
                        control: "reverse",
                        speed: 1.1,
                        controlType: "standard",
                        pluginConfig: { type: "mouseleave", hover: "each" },
                      },
                      ["wf:class", ["_404-link-block"]],
                    ],
                  ],
                  timelineIds: ["t-43de6b6d"],
                  deleted: !1,
                },
                {
                  id: "i-66c0cf70",
                  triggers: [["wf:load", { controlType: "load" }]],
                  timelineIds: ["t-15f2146d"],
                  deleted: !1,
                },
                {
                  id: "i-6f0eab5e",
                  triggers: [["wf:load", { controlType: "load" }]],
                  deleted: !1,
                },
              ],
              [
                {
                  id: "t-2c3e0366",
                  deleted: !1,
                  actions: [
                    {
                      id: "ta-6d603fda",
                      targets: [["wf:class", ["privacy-wp"]]],
                      timing: { duration: 0.05, position: 0 },
                      tt: 2,
                      properties: {
                        "wf:transform": { opacity: ["0%", "100%"] },
                      },
                    },
                    {
                      id: "ta-eca17832",
                      targets: [["wf:class", ["privacy-h1"]]],
                      timing: {
                        duration: 0.5,
                        position: 0,
                        stagger: { each: 0.01 },
                        ease: 6,
                      },
                      tt: 2,
                      properties: {
                        "wf:transform": {
                          opacity: ["0%", "100%"],
                          y: ["100%", "0%"],
                        },
                      },
                      splitText: { type: "chars", mask: "chars" },
                    },
                    {
                      id: "ta-952e8aab",
                      targets: [["wf:class", ["richtext"]]],
                      timing: { duration: 0.05, position: 0, ease: 1 },
                      tt: 2,
                      properties: {
                        "wf:transform": {
                          opacity: ["0%", null],
                          yPercent: ["2%", null],
                        },
                      },
                    },
                    {
                      id: "ta-c0f73ce7",
                      targets: [["wf:class", ["richtext"]]],
                      timing: { duration: 0.5, position: 0.46, ease: 2 },
                      tt: 2,
                      properties: {
                        "wf:transform": {
                          opacity: ["0%", "100%"],
                          yPercent: ["1%", "0%"],
                        },
                      },
                    },
                  ],
                },
                {
                  id: "t-43de6b6d",
                  deleted: !1,
                  actions: [
                    {
                      id: "ta-58b64f98",
                      targets: [
                        [
                          "wf:class",
                          ["_404-link-block", ["descendants", ".error-img-wp"]],
                        ],
                      ],
                      timing: {
                        position: 0,
                        stagger: { each: 0.1, from: "center" },
                        ease: 5,
                      },
                      tt: 2,
                      properties: {
                        "wf:transform": {
                          width: ["0px", "170px"],
                          height: ["120px", "120px"],
                        },
                      },
                    },
                  ],
                },
                {
                  id: "t-15f2146d",
                  deleted: !1,
                  actions: [
                    {
                      id: "ta-fac79bcb",
                      targets: [["wf:class", ["swiper-wrapper.main-wp"]]],
                      timing: { position: 0, stagger: { each: 6 } },
                      tt: 2,
                      properties: { "wf:transform": { x: ["0%", "-30%"] } },
                    },
                  ],
                },
              ]
            ),
            window.dispatchEvent(new CustomEvent("__wf_ix3_ready")),
            document.documentElement.classList.add("w-mod-ix3"));
        });
      }
      Webflow.require("ix2").init({
        events: {
          "e-13": {
            id: "e-13",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-3",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-624",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".button",
              originalId:
                "684fd519993bc96a6527ef9f|4d3e6050-21c2-1462-a5fc-89419cf31727",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".button",
                originalId:
                  "684fd519993bc96a6527ef9f|4d3e6050-21c2-1462-a5fc-89419cf31727",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18f4da304e0,
          },
          "e-14": {
            id: "e-14",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-4",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-635",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".button",
              originalId:
                "684fd519993bc96a6527ef9f|4d3e6050-21c2-1462-a5fc-89419cf31727",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".button",
                originalId:
                  "684fd519993bc96a6527ef9f|4d3e6050-21c2-1462-a5fc-89419cf31727",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18f4da304e0,
          },
          "e-17": {
            id: "e-17",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-260",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-18",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".tertiary-btn",
              originalId:
                "684fd519993bc96a6527ef9f|5966b0d7-c3a8-eea2-3641-5693b23b80ea",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".tertiary-btn",
                originalId:
                  "684fd519993bc96a6527ef9f|5966b0d7-c3a8-eea2-3641-5693b23b80ea",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18f4dc6d45d,
          },
          "e-18": {
            id: "e-18",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-261",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-17",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".tertiary-btn",
              originalId:
                "684fd519993bc96a6527ef9f|5966b0d7-c3a8-eea2-3641-5693b23b80ea",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".tertiary-btn",
                originalId:
                  "684fd519993bc96a6527ef9f|5966b0d7-c3a8-eea2-3641-5693b23b80ea",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18f4dc6d45d,
          },
          "e-42": {
            id: "e-42",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-4",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-48",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".primary-btn-wp-2",
              originalId:
                "684fd519993bc96a6527ef9f|4d3e6050-21c2-1462-a5fc-89419cf31727",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".primary-btn-wp-2",
                originalId:
                  "684fd519993bc96a6527ef9f|4d3e6050-21c2-1462-a5fc-89419cf31727",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18f4da304e0,
          },
          "e-48": {
            id: "e-48",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-3",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-621",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".primary-btn-wp-2",
              originalId:
                "684fd519993bc96a6527ef9f|4d3e6050-21c2-1462-a5fc-89419cf31727",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".primary-btn-wp-2",
                originalId:
                  "684fd519993bc96a6527ef9f|4d3e6050-21c2-1462-a5fc-89419cf31727",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18f4da304e0,
          },
          "e-120": {
            id: "e-120",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-121",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".hov-nav-card",
              originalId:
                "684fd519993bc96a6527ef9f|a3c12dc0-22fb-cff2-a8bb-86fb5634816b",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".hov-nav-card",
                originalId:
                  "684fd519993bc96a6527ef9f|a3c12dc0-22fb-cff2-a8bb-86fb5634816b",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18fa5a26409,
          },
          "e-121": {
            id: "e-121",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-2",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-120",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".hov-nav-card",
              originalId:
                "684fd519993bc96a6527ef9f|a3c12dc0-22fb-cff2-a8bb-86fb5634816b",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".hov-nav-card",
                originalId:
                  "684fd519993bc96a6527ef9f|a3c12dc0-22fb-cff2-a8bb-86fb5634816b",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18fa5a2640b,
          },
          "e-144": {
            id: "e-144",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-69",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-145",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".faq-content-wp",
              originalId:
                "684fd519993bc96a6527efb1|b027ddd2-2a3d-a051-5280-4f726b760949",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".faq-content-wp",
                originalId:
                  "684fd519993bc96a6527efb1|b027ddd2-2a3d-a051-5280-4f726b760949",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18fdf333291,
          },
          "e-145": {
            id: "e-145",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-70",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-144",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".faq-content-wp",
              originalId:
                "684fd519993bc96a6527efb1|b027ddd2-2a3d-a051-5280-4f726b760949",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".faq-content-wp",
                originalId:
                  "684fd519993bc96a6527efb1|b027ddd2-2a3d-a051-5280-4f726b760949",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18fdf333293,
          },
          "e-154": {
            id: "e-154",
            name: "",
            animationType: "custom",
            eventTypeId: "SLIDER_ACTIVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-91",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-155",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".result-slider-card",
              originalId:
                "684fd519993bc96a6527efb0|a40a85d8-1185-9b8d-140d-0310244f0dfa",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".result-slider-card",
                originalId:
                  "684fd519993bc96a6527efb0|a40a85d8-1185-9b8d-140d-0310244f0dfa",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18f80f0b3ab,
          },
          "e-155": {
            id: "e-155",
            name: "",
            animationType: "custom",
            eventTypeId: "SLIDER_INACTIVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-92",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-154",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".result-slider-card",
              originalId:
                "684fd519993bc96a6527efb0|a40a85d8-1185-9b8d-140d-0310244f0dfa",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".result-slider-card",
                originalId:
                  "684fd519993bc96a6527efb0|a40a85d8-1185-9b8d-140d-0310244f0dfa",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18f80f0b3b4,
          },
          "e-234": {
            id: "e-234",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-113",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-235",
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              selector: ".comp_top-row-content",
              originalId:
                "684fd519993bc96a6527efb6|51381d6b-37c0-45f7-c1d7-9b83dbe7922a",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".comp_top-row-content",
                originalId:
                  "684fd519993bc96a6527efb6|51381d6b-37c0-45f7-c1d7-9b83dbe7922a",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18ff2833d40,
          },
          "e-235": {
            id: "e-235",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-114",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-234",
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              selector: ".comp_top-row-content",
              originalId:
                "684fd519993bc96a6527efb6|51381d6b-37c0-45f7-c1d7-9b83dbe7922a",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".comp_top-row-content",
                originalId:
                  "684fd519993bc96a6527efb6|51381d6b-37c0-45f7-c1d7-9b83dbe7922a",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18ff2833d42,
          },
          "e-274": {
            id: "e-274",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-34",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-275",
              },
            },
            mediaQueries: ["main", "medium"],
            target: {
              selector: ".platform-card._1",
              originalId:
                "684fd519993bc96a6527ef9f|77fda318-ab76-fd06-dd26-a827941bb48d",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".platform-card",
                originalId:
                  "684fd519993bc96a6527ef9f|77fda318-ab76-fd06-dd26-a827941bb48d",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19017d4dded,
          },
          "e-276": {
            id: "e-276",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-34",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-277",
              },
            },
            mediaQueries: ["main", "medium"],
            target: {
              selector: ".platform-card._1",
              originalId:
                "684fd519993bc96a6527ef9f|77fda318-ab76-fd06-dd26-a827941bb48d",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".platform-card._1",
                originalId:
                  "684fd519993bc96a6527ef9f|77fda318-ab76-fd06-dd26-a827941bb48d",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 20,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19017d70918,
          },
          "e-278": {
            id: "e-278",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-121",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-279",
              },
            },
            mediaQueries: ["main", "medium"],
            target: {
              selector: ".platform-card._2",
              originalId:
                "684fd519993bc96a6527ef9f|6c27de3a-bbd6-61d8-37f2-b1214b18baf4",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".platform-card._2",
                originalId:
                  "684fd519993bc96a6527ef9f|6c27de3a-bbd6-61d8-37f2-b1214b18baf4",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1901a5586e6,
          },
          "e-280": {
            id: "e-280",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-122",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-281",
              },
            },
            mediaQueries: ["main", "medium"],
            target: {
              selector: ".platform-card._3",
              originalId:
                "684fd519993bc96a6527ef9f|d1bc79fe-d7f3-1e82-dafe-577a8cab026d",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".platform-card._3",
                originalId:
                  "684fd519993bc96a6527ef9f|d1bc79fe-d7f3-1e82-dafe-577a8cab026d",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1901a602470,
          },
          "e-294": {
            id: "e-294",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-123",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium"],
            target: {
              selector: ".manage-cycle-sticky-wp",
              originalId:
                "684fd519993bc96a6527ef9f|071df2b3-5293-bd0b-a866-d7c81de0eb9d",
              appliesTo: "CLASS",
            },
            targets: [
              {
                id: "684fd519993bc96a6527ef9f|071df2b3-5293-bd0b-a866-d7c81de0eb9d",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-123-p",
                smoothing: 70,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x1901ccda295,
          },
          "e-308": {
            id: "e-308",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-128",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-309",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".fs-toc_h-trigger",
              originalId:
                "678e76f4b9493ca644668c35|a30a225e-0e5f-8fcb-229e-5d47e56abe67",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".fs-toc_h-trigger",
                originalId:
                  "678e76f4b9493ca644668c35|a30a225e-0e5f-8fcb-229e-5d47e56abe67",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x180a08abdd2,
          },
          "e-309": {
            id: "e-309",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-129",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-308",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".fs-toc_h-trigger",
              originalId:
                "678e76f4b9493ca644668c35|a30a225e-0e5f-8fcb-229e-5d47e56abe67",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".fs-toc_h-trigger",
                originalId:
                  "678e76f4b9493ca644668c35|a30a225e-0e5f-8fcb-229e-5d47e56abe67",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x180a08abdd6,
          },
          "e-404": {
            id: "e-404",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-133",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".reggi-benefits-sticky-wp",
              originalId:
                "684fd519993bc96a6527efb5|52b24495-7178-f89f-7014-d3ad4f49e186",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".reggi-benefits-sticky-wp",
                originalId:
                  "684fd519993bc96a6527efb5|52b24495-7178-f89f-7014-d3ad4f49e186",
                appliesTo: "CLASS",
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-133-p",
                smoothing: 75,
                startsEntering: !0,
                addStartOffset: !0,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !0,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x190355490da,
          },
          "e-409": {
            id: "e-409",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-136",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-410",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".reg-topics-acc-title-wp",
              originalId:
                "684fd519993bc96a6527efc3|de3c7c91-91c1-02f3-9a61-7a4145f8b608",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".reg-topics-acc-title-wp",
                originalId:
                  "684fd519993bc96a6527efc3|de3c7c91-91c1-02f3-9a61-7a4145f8b608",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x190399f74ea,
          },
          "e-410": {
            id: "e-410",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-137",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-409",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".reg-topics-acc-title-wp",
              originalId:
                "684fd519993bc96a6527efc3|de3c7c91-91c1-02f3-9a61-7a4145f8b608",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".reg-topics-acc-title-wp",
                originalId:
                  "684fd519993bc96a6527efc3|de3c7c91-91c1-02f3-9a61-7a4145f8b608",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x190399f74ee,
          },
          "e-415": {
            id: "e-415",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-138",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".partner-text-highlihgt-wp",
              originalId:
                "684fd519993bc96a6527efc4|603018bb-0684-c5bb-ff5b-a320790648b5",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".partner-text-highlihgt-wp",
                originalId:
                  "684fd519993bc96a6527efc4|603018bb-0684-c5bb-ff5b-a320790648b5",
                appliesTo: "CLASS",
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-138-p",
                smoothing: 50,
                startsEntering: !0,
                addStartOffset: !0,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !0,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x19039ce8899,
          },
          "e-430": {
            id: "e-430",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-139",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-431",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".gen-ai-hero-illus-wp",
              originalId:
                "684fd519993bc96a6527efc6|4a7d1b88-a6a4-af00-aea7-6d9a874c3314",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".gen-ai-hero-illus-wp",
                originalId:
                  "684fd519993bc96a6527efc6|4a7d1b88-a6a4-af00-aea7-6d9a874c3314",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1903ebfe0b6,
          },
          "e-450": {
            id: "e-450",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-451",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".reggie-benefits-card-wp",
              originalId:
                "684fd519993bc96a6527efb5|41ba7581-f0c5-a4de-52c2-bab42d1b99b6",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".reggie-benefits-card-wp",
                originalId:
                  "684fd519993bc96a6527efb5|41ba7581-f0c5-a4de-52c2-bab42d1b99b6",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x19040836929,
          },
          "e-452": {
            id: "e-452",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-141",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["small", "tiny"],
            target: {
              selector: ".manage-cycle-illus-sticky-main-wp",
              originalId:
                "684fd519993bc96a6527ef9f|2940b628-cf7d-2f71-eed0-d3689d52b818",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".manage-cycle-illus-sticky-main-wp",
                originalId:
                  "684fd519993bc96a6527ef9f|2940b628-cf7d-2f71-eed0-d3689d52b818",
                appliesTo: "CLASS",
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-141-p",
                smoothing: 50,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x19043e7e804,
          },
          "e-457": {
            id: "e-457",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SHRINK_EFFECT",
              instant: !1,
              config: { actionListId: "shrinkIn", autoStopEventId: "e-458" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".home-meet-reggi-illus-wp",
              originalId:
                "684fd519993bc96a6527ef9f|db8a73f2-aeb9-174e-1921-2e0e22d57224",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".home-meet-reggi-illus-wp",
                originalId:
                  "684fd519993bc96a6527ef9f|db8a73f2-aeb9-174e-1921-2e0e22d57224",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 5,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x19044857c36,
          },
          "e-494": {
            id: "e-494",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-144",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-495",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".nav-link.mm",
              originalId: "b685853a-6cfc-7153-2416-59d9e4385cc1",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".nav-link.mm",
                originalId: "b685853a-6cfc-7153-2416-59d9e4385cc1",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1904a97f649,
          },
          "e-498": {
            id: "e-498",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-148",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-499",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".nav-link.mm.nav-1",
              originalId: "b685853a-6cfc-7153-2416-59d9e4385cc1",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".nav-link.mm.nav-1",
                originalId: "b685853a-6cfc-7153-2416-59d9e4385cc1",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1904ab9a1fd,
          },
          "e-500": {
            id: "e-500",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-147",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-501",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".nav-overlay",
              originalId: "f25c8261-35b6-93b6-fa5c-2fe4c5728a5c",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".nav-overlay",
                originalId: "f25c8261-35b6-93b6-fa5c-2fe4c5728a5c",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1904abb7020,
          },
          "e-506": {
            id: "e-506",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-154",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-507",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".nav-link.mm.nav-3",
              originalId: "01f6fff8-0777-ba77-b089-dbfdb4305fa0",
              appliesTo: "CLASS",
            },
            targets: [
              {
                id: "01f6fff8-0777-ba77-b089-dbfdb4305fa0",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1904ac83386,
          },
          "e-508": {
            id: "e-508",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-155",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-509",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".nav-link.mm.nav-4",
              originalId: "01f6fff8-0777-ba77-b089-dbfdb4305fa7",
              appliesTo: "CLASS",
            },
            targets: [
              {
                id: "01f6fff8-0777-ba77-b089-dbfdb4305fa7",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1904ac83386,
          },
          "e-519": {
            id: "e-519",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-147",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-518",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".main-wp.nav",
              originalId: "01f6fff8-0777-ba77-b089-dbfdb4305f8e",
              appliesTo: "CLASS",
            },
            targets: [
              {
                id: "01f6fff8-0777-ba77-b089-dbfdb4305f8e",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1904ad44f0d,
          },
          "e-520": {
            id: "e-520",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-153",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-521",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".nav-link.mm.nav-2",
              originalId: "01f6fff8-0777-ba77-b089-dbfdb4305f9c",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".nav-link.mm.nav-2",
                originalId: "01f6fff8-0777-ba77-b089-dbfdb4305f9c",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1904ad4f20b,
          },
          "e-522": {
            id: "e-522",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-6",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-523",
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              selector: ".ham-menu",
              originalId: "01f6fff8-0777-ba77-b089-dbfdb4305f93",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".ham-menu",
                originalId: "01f6fff8-0777-ba77-b089-dbfdb4305f93",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1904b34c00a,
          },
          "e-523": {
            id: "e-523",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-152",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-522",
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              selector: ".ham-menu",
              originalId: "01f6fff8-0777-ba77-b089-dbfdb4305f93",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".ham-menu",
                originalId: "01f6fff8-0777-ba77-b089-dbfdb4305f93",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1904b34c00d,
          },
          "e-524": {
            id: "e-524",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-150",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-525",
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              selector: ".nav-link.mm",
              originalId: "01f6fff8-0777-ba77-b089-dbfdb4305f98",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".nav-link.mm",
                originalId: "01f6fff8-0777-ba77-b089-dbfdb4305f98",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1904b3d845f,
          },
          "e-526": {
            id: "e-526",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-151",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-527",
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              selector: ".nav-back",
              originalId: "01f6fff8-0777-ba77-b089-dbfdb4305fb5",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".nav-back",
                originalId: "01f6fff8-0777-ba77-b089-dbfdb4305fb5",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1904d86fb99,
          },
          "e-532": {
            id: "e-532",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-147",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-533",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".nav-link.no-mm",
              originalId: "01f6fff8-0777-ba77-b089-dbfdb4305fa4",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".nav-link.no-mm",
                originalId: "01f6fff8-0777-ba77-b089-dbfdb4305fa4",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1904f88297d,
          },
          "e-577": {
            id: "e-577",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-158",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".rcm-automate-card-wp",
              originalId:
                "684fd519993bc96a6527efb1|a074cfe2-d12b-41d3-6b32-849a5a2e95c3",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".rcm-automate-card-wp",
                originalId:
                  "684fd519993bc96a6527efb1|a074cfe2-d12b-41d3-6b32-849a5a2e95c3",
                appliesTo: "CLASS",
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-158-p",
                smoothing: 50,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 10,
              },
            ],
            createdOn: 0x19050997075,
          },
          "e-580": {
            id: "e-580",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-147",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-581",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".nav-logo-wp",
              originalId: "01f6fff8-0777-ba77-b089-dbfdb4305f91",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".nav-logo-wp",
                originalId: "01f6fff8-0777-ba77-b089-dbfdb4305f91",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19052699b74,
          },
          "e-582": {
            id: "e-582",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-3",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-583",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".arrow-wp",
              originalId: "0edff5f2-e67c-fdb7-6a97-0455414f0532",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".arrow-wp",
                originalId: "0edff5f2-e67c-fdb7-6a97-0455414f0532",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19058f38920,
          },
          "e-583": {
            id: "e-583",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-4",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-582",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".arrow-wp",
              originalId: "0edff5f2-e67c-fdb7-6a97-0455414f0532",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".arrow-wp",
                originalId: "0edff5f2-e67c-fdb7-6a97-0455414f0532",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19058f38924,
          },
          "e-584": {
            id: "e-584",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-159",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-835",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".fs-toc_h-trigger",
              originalId:
                "673f26f1916540b693fd7376|02054c7a-e731-0ad4-0372-0c74c9dd3f54",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".fs-toc_h-trigger",
                originalId:
                  "673f26f1916540b693fd7376|02054c7a-e731-0ad4-0372-0c74c9dd3f54",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x180a08abdd2,
          },
          "e-585": {
            id: "e-585",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-160",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-834",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".fs-toc_h-trigger",
              originalId:
                "673f26f1916540b693fd7376|02054c7a-e731-0ad4-0372-0c74c9dd3f54",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".fs-toc_h-trigger",
                originalId:
                  "673f26f1916540b693fd7376|02054c7a-e731-0ad4-0372-0c74c9dd3f54",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x180a08abdd6,
          },
          "e-586": {
            id: "e-586",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-161",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-587",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".nav-link.mm.nav-3",
              originalId: "b7747dfd-77a2-282c-d7da-e86b01ff7a19",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".nav-link.mm.nav-3",
                originalId: "b7747dfd-77a2-282c-d7da-e86b01ff7a19",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x194a2b2817f,
          },
          "e-588": {
            id: "e-588",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-162",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-589",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".nav-link.mm.nav-4",
              originalId:
                "684fd519993bc96a6527efa2|0db63d04-2997-6658-e826-aee98cebaef7",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".nav-link.mm.nav-4",
                originalId:
                  "684fd519993bc96a6527efa2|0db63d04-2997-6658-e826-aee98cebaef7",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x194a2b2817f,
          },
          "e-591": {
            id: "e-591",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-163",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-590",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".main-wp.nav",
              originalId:
                "684fd519993bc96a6527efa2|0db63d04-2997-6658-e826-aee98cebaede",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".main-wp.nav",
                originalId:
                  "684fd519993bc96a6527efa2|0db63d04-2997-6658-e826-aee98cebaede",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x194a2b2817f,
          },
          "e-592": {
            id: "e-592",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-164",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-593",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".nav-link.mm.nav-2",
              originalId: "a504165d-333e-299a-2fdf-60d71134f972",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".nav-link.mm.nav-2",
                originalId: "a504165d-333e-299a-2fdf-60d71134f972",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x194a2b2817f,
          },
          "e-594": {
            id: "e-594",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-165",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-595",
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              selector: ".ham-menu",
              originalId:
                "684fd519993bc96a6527efa2|0db63d04-2997-6658-e826-aee98cebaee3",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".ham-menu",
                originalId:
                  "684fd519993bc96a6527efa2|0db63d04-2997-6658-e826-aee98cebaee3",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x194a2b2817f,
          },
          "e-595": {
            id: "e-595",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-166",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-594",
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              selector: ".ham-menu",
              originalId:
                "684fd519993bc96a6527efa2|0db63d04-2997-6658-e826-aee98cebaee3",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".ham-menu",
                originalId:
                  "684fd519993bc96a6527efa2|0db63d04-2997-6658-e826-aee98cebaee3",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x194a2b2817f,
          },
          "e-596": {
            id: "e-596",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-167",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-597",
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              selector: ".nav-link.mm",
              originalId: "4644c366-cfbf-ad3c-7ea4-021ccc8771e9",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".nav-link.mm",
                originalId: "4644c366-cfbf-ad3c-7ea4-021ccc8771e9",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x194a2b2817f,
          },
          "e-598": {
            id: "e-598",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-168",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-599",
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              selector: ".nav-back",
              originalId:
                "684fd519993bc96a6527efa2|0db63d04-2997-6658-e826-aee98cebaf01",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".nav-back",
                originalId:
                  "684fd519993bc96a6527efa2|0db63d04-2997-6658-e826-aee98cebaf01",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x194a2b2817f,
          },
          "e-600": {
            id: "e-600",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-163",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-601",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".nav-link.no-mm",
              originalId:
                "684fd519993bc96a6527efa2|0db63d04-2997-6658-e826-aee98cebaef4",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".nav-link.no-mm",
                originalId:
                  "684fd519993bc96a6527efa2|0db63d04-2997-6658-e826-aee98cebaef4",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x194a2b2817f,
          },
          "e-602": {
            id: "e-602",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-163",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-603",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".nav-logo-wp",
              originalId:
                "684fd519993bc96a6527efa2|0db63d04-2997-6658-e826-aee98cebaee1",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".nav-logo-wp",
                originalId:
                  "684fd519993bc96a6527efa2|0db63d04-2997-6658-e826-aee98cebaee1",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x194a2b2817f,
          },
          "e-606": {
            id: "e-606",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-169",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-607",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".nav-link-1.mm-1",
              originalId:
                "684fd519993bc96a6527efa6|26f503c7-6148-ca52-8388-69125d347725",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".nav-link-1.mm-1",
                originalId:
                  "684fd519993bc96a6527efa6|26f503c7-6148-ca52-8388-69125d347725",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x194a8e216ae,
          },
          "e-607": {
            id: "e-607",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-170",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-606",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".nav-link-1.mm-1",
              originalId:
                "684fd519993bc96a6527efa6|26f503c7-6148-ca52-8388-69125d347725",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".nav-link-1.mm-1",
                originalId:
                  "684fd519993bc96a6527efa6|26f503c7-6148-ca52-8388-69125d347725",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x194a8e216b0,
          },
          "e-608": {
            id: "e-608",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-184",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-632",
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              selector: ".ham-wp",
              originalId: "924182c0-44aa-3bb8-d506-e1a09b70971c",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".ham-wp",
                originalId: "924182c0-44aa-3bb8-d506-e1a09b70971c",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x194b223613a,
          },
          "e-610": {
            id: "e-610",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-173",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-636",
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              selector: ".nav-2-link-main-label",
              originalId: "924182c0-44aa-3bb8-d506-e1a09b709722",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".nav-2-link-main-label",
                originalId: "924182c0-44aa-3bb8-d506-e1a09b709722",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x194cb75b23a,
          },
          "e-612": {
            id: "e-612",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-177",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-624",
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              selector: ".nav-2-back",
              originalId: "01f6fff8-0777-ba77-b089-dbfdb4305fb5",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".nav-2-back",
                originalId: "01f6fff8-0777-ba77-b089-dbfdb4305fb5",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1904d86fb99,
          },
          "e-613": {
            id: "e-613",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-179",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-788",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".nav-2-link.no-mm",
              originalId: "01f6fff8-0777-ba77-b089-dbfdb4305fa4",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".nav-2-link.no-mm",
                originalId: "01f6fff8-0777-ba77-b089-dbfdb4305fa4",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1904f88297d,
          },
          "e-616": {
            id: "e-616",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-183",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-765",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".nav-2-link.mm",
              originalId: "b685853a-6cfc-7153-2416-59d9e4385cc1",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".nav-2-link.mm",
                originalId: "b685853a-6cfc-7153-2416-59d9e4385cc1",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1904a97f649,
          },
          "e-617": {
            id: "e-617",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-174",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-611",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".nav-2-link.mm.nav-3",
              originalId: "01f6fff8-0777-ba77-b089-dbfdb4305fa0",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".nav-2-link.mm.nav-3",
                originalId: "01f6fff8-0777-ba77-b089-dbfdb4305fa0",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1904ac83386,
          },
          "e-618": {
            id: "e-618",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-175",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-616",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".nav-2-link.mm",
              originalId: "b685853a-6cfc-7153-2416-59d9e4385cc1",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".nav-2-link.mm",
                originalId: "b685853a-6cfc-7153-2416-59d9e4385cc1",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1904a97f64c,
          },
          "e-620": {
            id: "e-620",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-179",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-609",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "924182c0-44aa-3bb8-d506-e1a09b709714",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "924182c0-44aa-3bb8-d506-e1a09b709714",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x194b192c6f2,
          },
          "e-622": {
            id: "e-622",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-180",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-619",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".nav-2-link.mm.nav-5",
              originalId: "924182c0-44aa-3bb8-d506-e1a09b70973d",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".nav-2-link.mm.nav-5",
                originalId: "924182c0-44aa-3bb8-d506-e1a09b70973d",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x194b192c6f2,
          },
          "e-627": {
            id: "e-627",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-176",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-625",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".nav-2-link.mm.nav-4",
              originalId: "01f6fff8-0777-ba77-b089-dbfdb4305fa7",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".nav-2-link.mm.nav-4",
                originalId: "01f6fff8-0777-ba77-b089-dbfdb4305fa7",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1904ac83386,
          },
          "e-628": {
            id: "e-628",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-179",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-621",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "924182c0-44aa-3bb8-d506-e1a09b709752",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "924182c0-44aa-3bb8-d506-e1a09b709752",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x194b2326f54,
          },
          "e-629": {
            id: "e-629",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-178",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-614",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".nav-2-link.mm.nav-1",
              originalId: "b685853a-6cfc-7153-2416-59d9e4385cc1",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".nav-2-link.mm.nav-1",
                originalId: "b685853a-6cfc-7153-2416-59d9e4385cc1",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1904ab9a1fd,
          },
          "e-630": {
            id: "e-630",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-181",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-631",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".nav-2-link.mm.nav-6",
              originalId: "dd00d160-1024-604f-b914-68b00ed712eb",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".nav-2-link.mm.nav-6",
                originalId: "dd00d160-1024-604f-b914-68b00ed712eb",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x194a80a11c6,
          },
          "e-632": {
            id: "e-632",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-172",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-608",
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              selector: ".ham-wp",
              originalId: "924182c0-44aa-3bb8-d506-e1a09b70971c",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".ham-wp",
                originalId: "924182c0-44aa-3bb8-d506-e1a09b70971c",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x194b2236139,
          },
          "e-635": {
            id: "e-635",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-177",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-711",
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              selector: ".nav-2-back",
              originalId: "a4f964e2-2f24-cf78-9f97-1b40ce090812",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".nav-2-back",
                originalId: "a4f964e2-2f24-cf78-9f97-1b40ce090812",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19270cbecb0,
          },
          "e-636": {
            id: "e-636",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-182",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-610",
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              selector: ".nav-2-link-main-label",
              originalId: "924182c0-44aa-3bb8-d506-e1a09b709722",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".nav-2-link-main-label",
                originalId: "924182c0-44aa-3bb8-d506-e1a09b709722",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x194cb75b23b,
          },
          "e-637": {
            id: "e-637",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-171",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-773",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".nav-2-link.mm.nav-2",
              originalId: "01f6fff8-0777-ba77-b089-dbfdb4305f9c",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".nav-2-link.mm.nav-2",
                originalId: "01f6fff8-0777-ba77-b089-dbfdb4305f9c",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1904ad4f20b,
          },
          "e-643": {
            id: "e-643",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-179",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-644",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "924182c0-44aa-3bb8-d506-e1a09b709719",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "924182c0-44aa-3bb8-d506-e1a09b709719",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x194d5ffe31c,
          },
          "e-645": {
            id: "e-645",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-188",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-646",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".nav-3-link.mm",
              originalId:
                "684fd519993bc96a6527efa9|4d63e65d-70fb-c952-b62c-6b08a30f0969",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".nav-3-link.mm",
                originalId:
                  "684fd519993bc96a6527efa9|4d63e65d-70fb-c952-b62c-6b08a30f0969",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1951d15da7a,
          },
          "e-646": {
            id: "e-646",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-175",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-645",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".nav-3-link.mm",
              originalId:
                "684fd519993bc96a6527efa9|4d63e65d-70fb-c952-b62c-6b08a30f0969",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".nav-3-link.mm",
                originalId:
                  "684fd519993bc96a6527efa9|4d63e65d-70fb-c952-b62c-6b08a30f0969",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1951d15da7c,
          },
          "e-649": {
            id: "e-649",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-189",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-650",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".nav-3-link.no-mm",
              originalId:
                "684fd519993bc96a6527efa9|4d63e65d-70fb-c952-b62c-6b08a30f0ac6",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".nav-3-link.no-mm",
                originalId:
                  "684fd519993bc96a6527efa9|4d63e65d-70fb-c952-b62c-6b08a30f0ac6",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1951d30940d,
          },
          "e-651": {
            id: "e-651",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-178",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-652",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".nav-3-link.mm.nav-1",
              originalId:
                "684fd519993bc96a6527efa9|4d63e65d-70fb-c952-b62c-6b08a30f0969",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".nav-3-link.mm.nav-1",
                originalId:
                  "684fd519993bc96a6527efa9|4d63e65d-70fb-c952-b62c-6b08a30f0969",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1951d45ed5f,
          },
          "e-653": {
            id: "e-653",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-171",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-654",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".nav-3-link.mm.nav-2",
              originalId:
                "684fd519993bc96a6527efa9|4d63e65d-70fb-c952-b62c-6b08a30f09b6",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".nav-3-link.mm.nav-2",
                originalId:
                  "684fd519993bc96a6527efa9|4d63e65d-70fb-c952-b62c-6b08a30f09b6",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1951d492d1b,
          },
          "e-655": {
            id: "e-655",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-174",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-656",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".nav-3-link.mm.nav-3",
              originalId:
                "684fd519993bc96a6527efa9|4d63e65d-70fb-c952-b62c-6b08a30f09d8",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".nav-3-link.mm.nav-3",
                originalId:
                  "684fd519993bc96a6527efa9|4d63e65d-70fb-c952-b62c-6b08a30f09d8",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1951d496e79,
          },
          "e-657": {
            id: "e-657",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-176",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-658",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".nav-3-link.mm.nav-4",
              originalId:
                "684fd519993bc96a6527efa9|4d63e65d-70fb-c952-b62c-6b08a30f09fd",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".nav-3-link.mm.nav-4",
                originalId:
                  "684fd519993bc96a6527efa9|4d63e65d-70fb-c952-b62c-6b08a30f09fd",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1951d4995d0,
          },
          "e-659": {
            id: "e-659",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-180",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-660",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".nav-3-link.mm.nav-5",
              originalId:
                "684fd519993bc96a6527efa9|4d63e65d-70fb-c952-b62c-6b08a30f0a4a",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".nav-3-link.mm.nav-5",
                originalId:
                  "684fd519993bc96a6527efa9|4d63e65d-70fb-c952-b62c-6b08a30f0a4a",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1951d49bf55,
          },
          "e-661": {
            id: "e-661",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-181",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-662",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".nav-3-link.mm.nav-6",
              originalId:
                "684fd519993bc96a6527efa9|4d63e65d-70fb-c952-b62c-6b08a30f0a97",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".nav-3-link.mm.nav-6",
                originalId:
                  "684fd519993bc96a6527efa9|4d63e65d-70fb-c952-b62c-6b08a30f0a97",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1951d49f39b,
          },
          "e-665": {
            id: "e-665",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-192",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-666",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".faq-ques",
              originalId:
                "684fd519993bc96a6527efab|a3913575-1725-bc7e-cb52-c025566d1589",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".faq-ques",
                originalId:
                  "684fd519993bc96a6527efab|a3913575-1725-bc7e-cb52-c025566d1589",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195c73d1ca4,
          },
          "e-666": {
            id: "e-666",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-193",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-665",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".faq-ques",
              originalId:
                "684fd519993bc96a6527efab|a3913575-1725-bc7e-cb52-c025566d1589",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".faq-ques",
                originalId:
                  "684fd519993bc96a6527efab|a3913575-1725-bc7e-cb52-c025566d1589",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195c73d1ca6,
          },
          "e-669": {
            id: "e-669",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-195",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-670",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".arrow-wp",
              originalId:
                "684fd519993bc96a6527ef9f|5c457ddb-8270-9a2e-e54d-409ec5a02e31",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".arrow-wp",
                originalId:
                  "684fd519993bc96a6527ef9f|5c457ddb-8270-9a2e-e54d-409ec5a02e31",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196ec7ccaf7,
          },
          "e-670": {
            id: "e-670",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-196",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-669",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".arrow-wp",
              originalId:
                "684fd519993bc96a6527ef9f|5c457ddb-8270-9a2e-e54d-409ec5a02e31",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".arrow-wp",
                originalId:
                  "684fd519993bc96a6527ef9f|5c457ddb-8270-9a2e-e54d-409ec5a02e31",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196ec7ccaf7,
          },
          "e-671": {
            id: "e-671",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-198",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-672",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".product-card-wp",
              originalId:
                "684fd519993bc96a6527ef9f|2f164fe1-b70a-fac0-23b7-6dcf1cd37e04",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".product-card-wp",
                originalId:
                  "684fd519993bc96a6527ef9f|2f164fe1-b70a-fac0-23b7-6dcf1cd37e04",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1977da14f1d,
          },
          "e-672": {
            id: "e-672",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-199",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-671",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".product-card-wp",
              originalId:
                "684fd519993bc96a6527ef9f|2f164fe1-b70a-fac0-23b7-6dcf1cd37e04",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".product-card-wp",
                originalId:
                  "684fd519993bc96a6527ef9f|2f164fe1-b70a-fac0-23b7-6dcf1cd37e04",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1977da14f1f,
          },
          "e-677": {
            id: "e-677",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-202",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-678",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".fs_accordion-1_header",
              originalId:
                "684fd519993bc96a6527ef9f|3c18abae-b5fb-531f-e921-9b681945c62c",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".fs_accordion-1_header",
                originalId:
                  "684fd519993bc96a6527ef9f|3c18abae-b5fb-531f-e921-9b681945c62c",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18444512480,
          },
          "e-678": {
            id: "e-678",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-203",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-677",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".fs_accordion-1_header",
              originalId:
                "684fd519993bc96a6527ef9f|3c18abae-b5fb-531f-e921-9b681945c62c",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".fs_accordion-1_header",
                originalId:
                  "684fd519993bc96a6527ef9f|3c18abae-b5fb-531f-e921-9b681945c62c",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18444512480,
          },
          "e-679": {
            id: "e-679",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-205",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-681",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".fs_modal-1_cover",
              originalId:
                "684fd519993bc96a6527ef9f|f6c90971-5e78-6b28-0663-3b53396d0c4e",
              appliesTo: "CLASS",
            },
            targets: [
              {
                id: "684fd519993bc96a6527ef9f|f6c90971-5e78-6b28-0663-3b53396d0c4e",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1839efb7353,
          },
          "e-680": {
            id: "e-680",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-205",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-682",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".fs_modal-1_close",
              originalId:
                "684fd519993bc96a6527ef9f|f6c90971-5e78-6b28-0663-3b53396d0c5b",
              appliesTo: "CLASS",
            },
            targets: [
              {
                id: "684fd519993bc96a6527ef9f|f6c90971-5e78-6b28-0663-3b53396d0c5b",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1839efb7353,
          },
          "e-683": {
            id: "e-683",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-204",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-684",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".fs_modal-1_button",
              originalId: "65f7b7d0-ce13-f63a-1a30-4df7265835e3",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".fs_modal-1_button",
                originalId: "65f7b7d0-ce13-f63a-1a30-4df7265835e3",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1844447615c,
          },
          "e-687": {
            id: "e-687",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-205",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-689",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".fs_modal-1_cover",
              originalId:
                "684fd519993bc96a6527ef9f|97b45b48-7d31-12e6-408d-f9f296ae3b39",
              appliesTo: "CLASS",
            },
            targets: [
              {
                id: "684fd519993bc96a6527ef9f|97b45b48-7d31-12e6-408d-f9f296ae3b39",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1839efb7353,
          },
          "e-688": {
            id: "e-688",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-205",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-690",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".fs_modal-1_close",
              originalId:
                "684fd519993bc96a6527ef9f|97b45b48-7d31-12e6-408d-f9f296ae3b46",
              appliesTo: "CLASS",
            },
            targets: [
              {
                id: "684fd519993bc96a6527ef9f|97b45b48-7d31-12e6-408d-f9f296ae3b46",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1839efb7353,
          },
          "e-699": {
            id: "e-699",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-201",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-700",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "684fd519993bc96a6527ef9f|0f727402-e2df-8712-ecf7-8f59f9a47619",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "684fd519993bc96a6527ef9f|0f727402-e2df-8712-ecf7-8f59f9a47619",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19782a927c0,
          },
          "e-703": {
            id: "e-703",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-206",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-780",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "684fd519993bc96a6527ef9f|26ccc5c1-44cb-0eed-988d-dbb142978970",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "684fd519993bc96a6527ef9f|26ccc5c1-44cb-0eed-988d-dbb142978970",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19783d17d8f,
          },
          "e-705": {
            id: "e-705",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-207",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-706",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "684fd519993bc96a6527ef9f|3b75b55b-f7ed-9b6a-ec6a-e159c0073c51",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "684fd519993bc96a6527ef9f|3b75b55b-f7ed-9b6a-ec6a-e159c0073c51",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19783d4f560,
          },
          "e-707": {
            id: "e-707",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-3",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-708",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".primary-button-component-wp",
              originalId: "70dd1ef0-971e-0338-62df-75cd493737d9",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".primary-button-component-wp",
                originalId: "70dd1ef0-971e-0338-62df-75cd493737d9",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19783d6eca4,
          },
          "e-708": {
            id: "e-708",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-4",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-707",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".primary-button-component-wp",
              originalId: "70dd1ef0-971e-0338-62df-75cd493737d9",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".primary-button-component-wp",
                originalId: "70dd1ef0-971e-0338-62df-75cd493737d9",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19783d6eca5,
          },
          "e-711": {
            id: "e-711",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-211",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-712",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6852aa0101f0a8671458a2a5|3ff92af8-5f8c-7761-0f51-6242f2eb73e8",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6852aa0101f0a8671458a2a5|3ff92af8-5f8c-7761-0f51-6242f2eb73e8",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197631a2450,
          },
          "e-713": {
            id: "e-713",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-212",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-714",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".close",
              originalId:
                "6852aa0101f0a8671458a2a5|3ff92af8-5f8c-7761-0f51-6242f2eb7402",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".close",
                originalId:
                  "6852aa0101f0a8671458a2a5|3ff92af8-5f8c-7761-0f51-6242f2eb7402",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19763265458,
          },
          "e-715": {
            id: "e-715",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-210",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-716",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6852aa0101f0a8671458a2a5|b5a835a6-7d80-b0ee-2a7c-4e635cd57327",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6852aa0101f0a8671458a2a5|b5a835a6-7d80-b0ee-2a7c-4e635cd57327",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197878bb419,
          },
          "e-717": {
            id: "e-717",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-213",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-718",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "a7dc5da9-0922-c6a0-ddb2-8aee4b00fc1a",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "a7dc5da9-0922-c6a0-ddb2-8aee4b00fc1a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1978c445c11,
          },
          "e-727": {
            id: "e-727",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-200",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-728",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "684fd519993bc96a6527ef9f|2f164fe1-b70a-fac0-23b7-6dcf1cd37e04",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "684fd519993bc96a6527ef9f|2f164fe1-b70a-fac0-23b7-6dcf1cd37e04",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1979d2950e8,
          },
          "e-737": {
            id: "e-737",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-217",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-738",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "685549d25044265efbff38c5|9c1e11c6-4308-2f90-d6ed-13e666af9b3d",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "685549d25044265efbff38c5|9c1e11c6-4308-2f90-d6ed-13e666af9b3d",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197a5adbb13,
          },
          "e-738": {
            id: "e-738",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_OUT_OF_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-221",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-737",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "685549d25044265efbff38c5|9c1e11c6-4308-2f90-d6ed-13e666af9b3d",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "685549d25044265efbff38c5|9c1e11c6-4308-2f90-d6ed-13e666af9b3d",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 20,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197a5adbb13,
          },
          "e-739": {
            id: "e-739",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-218",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-740",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "685549d25044265efbff38c5|9c1e11c6-4308-2f90-d6ed-13e666af9b5a",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "685549d25044265efbff38c5|9c1e11c6-4308-2f90-d6ed-13e666af9b5a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 30,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197a5adbb13,
          },
          "e-740": {
            id: "e-740",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_OUT_OF_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-220",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-739",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "685549d25044265efbff38c5|9c1e11c6-4308-2f90-d6ed-13e666af9b5a",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "685549d25044265efbff38c5|9c1e11c6-4308-2f90-d6ed-13e666af9b5a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 20,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197a5adbb13,
          },
          "e-741": {
            id: "e-741",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-216",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-742",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "685549d25044265efbff38c5|9c1e11c6-4308-2f90-d6ed-13e666af9b76",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "685549d25044265efbff38c5|9c1e11c6-4308-2f90-d6ed-13e666af9b76",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 30,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197a5adbb13,
          },
          "e-742": {
            id: "e-742",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_OUT_OF_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-219",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-741",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "685549d25044265efbff38c5|9c1e11c6-4308-2f90-d6ed-13e666af9b76",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "685549d25044265efbff38c5|9c1e11c6-4308-2f90-d6ed-13e666af9b76",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 50,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197a5adbb13,
          },
          "e-743": {
            id: "e-743",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-222",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-744",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".grow-img-contain",
              originalId:
                "6854ff4a14c1da3689433232|70b5a27c-a371-92e5-6507-632d61ffc188",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".grow-img-contain",
                originalId:
                  "6854ff4a14c1da3689433232|70b5a27c-a371-92e5-6507-632d61ffc188",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 25,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197ac0a9556,
          },
          "e-745": {
            id: "e-745",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-223",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-746",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "e7d51000-91c2-12f1-fefb-588c492b3e70",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "e7d51000-91c2-12f1-fefb-588c492b3e70",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 25,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197ac0e6a1c,
          },
          "e-747": {
            id: "e-747",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-224",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-748",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".button-2.secondary",
              originalId: "e7010526-a3ce-5d18-5785-20c00b86ca8f",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".button-2.secondary",
                originalId: "e7010526-a3ce-5d18-5785-20c00b86ca8f",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1973a5b1309,
          },
          "e-748": {
            id: "e-748",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-225",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-747",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".button-2.secondary",
              originalId: "e7010526-a3ce-5d18-5785-20c00b86ca8f",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".button-2.secondary",
                originalId: "e7010526-a3ce-5d18-5785-20c00b86ca8f",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1973a5b130c,
          },
          "e-749": {
            id: "e-749",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-226",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-750",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".contact-animaition-trigger",
              originalId: "e7d51000-91c2-12f1-fefb-588c492b3e6d",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".contact-animaition-trigger",
                originalId: "e7d51000-91c2-12f1-fefb-588c492b3e6d",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197b06ebdac,
          },
          "e-755": {
            id: "e-755",
            name: "",
            animationType: "custom",
            eventTypeId: "DROPDOWN_OPEN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-230",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-756",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".filter-dropdown",
              originalId:
                "686cc039586de2a84281d93c|0faffb57-fd1b-015c-8e88-f3080cb81acd",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".filter-dropdown",
                originalId:
                  "686cc039586de2a84281d93c|0faffb57-fd1b-015c-8e88-f3080cb81acd",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197f422639a,
          },
          "e-756": {
            id: "e-756",
            name: "",
            animationType: "custom",
            eventTypeId: "DROPDOWN_CLOSE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-231",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-755",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".filter-dropdown",
              originalId:
                "686cc039586de2a84281d93c|0faffb57-fd1b-015c-8e88-f3080cb81acd",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".filter-dropdown",
                originalId:
                  "686cc039586de2a84281d93c|0faffb57-fd1b-015c-8e88-f3080cb81acd",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197f422639d,
          },
          "e-769": {
            id: "e-769",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-237",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-770",
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              id: "686d0a980118e9c9496e05e0|87ce2e71-822d-8e16-2581-3d0ddc480ee1",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "686d0a980118e9c9496e05e0|87ce2e71-822d-8e16-2581-3d0ddc480ee1",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19830b2c399,
          },
          "e-771": {
            id: "e-771",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-238",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-772",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "686d0a980118e9c9496e05e0|eb2c1f73-64b7-fd97-bce8-8d405c95ded7",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "686d0a980118e9c9496e05e0|eb2c1f73-64b7-fd97-bce8-8d405c95ded7",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19830b46a30,
          },
          "e-773": {
            id: "e-773",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-237",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-774",
              },
            },
            mediaQueries: ["small", "tiny"],
            target: {
              id: "686d0a980118e9c9496e05e0|aed7ddda-ef8e-7345-85bf-00e45505d601",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "686d0a980118e9c9496e05e0|aed7ddda-ef8e-7345-85bf-00e45505d601",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19830b9a0ce,
          },
          "e-781": {
            id: "e-781",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-206",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-782",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "684fd519993bc96a6527ef9f|5f1379ad-e936-c4b4-4dc1-484261017841",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "684fd519993bc96a6527ef9f|5f1379ad-e936-c4b4-4dc1-484261017841",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198422d7b30,
          },
          "e-785": {
            id: "e-785",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-244",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-786",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".primary-button-component-wp",
              originalId:
                "686cc039586de2a84281d93c|c61dbca5-0e0e-69a2-711b-0736dc187f41",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".primary-button-component-wp",
                originalId:
                  "686cc039586de2a84281d93c|c61dbca5-0e0e-69a2-711b-0736dc187f41",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1985103dd18,
          },
          "e-786": {
            id: "e-786",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-245",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-785",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".primary-button-component-wp",
              originalId:
                "686cc039586de2a84281d93c|c61dbca5-0e0e-69a2-711b-0736dc187f41",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".primary-button-component-wp",
                originalId:
                  "686cc039586de2a84281d93c|c61dbca5-0e0e-69a2-711b-0736dc187f41",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1985103dd18,
          },
          "e-789": {
            id: "e-789",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-250",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-790",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "686d0a980118e9c9496e05e0|7613af9d-761b-3549-2585-c635ed83f93f",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "686d0a980118e9c9496e05e0|7613af9d-761b-3549-2585-c635ed83f93f",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1985a25ae2d,
          },
          "e-791": {
            id: "e-791",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-251",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-792",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "686d0a980118e9c9496e05e0|389082c4-7251-ac98-c577-4ef90075bc6c",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "686d0a980118e9c9496e05e0|389082c4-7251-ac98-c577-4ef90075bc6c",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1985a2d1174,
          },
          "e-793": {
            id: "e-793",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-252",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-794",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "684fd519993bc96a6527ef9f|5f1379ad-e936-c4b4-4dc1-484261017842",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "684fd519993bc96a6527ef9f|5f1379ad-e936-c4b4-4dc1-484261017842",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1987e265604,
          },
          "e-794": {
            id: "e-794",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-253",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-793",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "684fd519993bc96a6527ef9f|5f1379ad-e936-c4b4-4dc1-484261017842",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "684fd519993bc96a6527ef9f|5f1379ad-e936-c4b4-4dc1-484261017842",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1987e265606,
          },
          "e-799": {
            id: "e-799",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-254",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-800",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".primary-button-component-wp",
              originalId:
                "686cc039586de2a84281d93c|73b0237a-5ba0-dd27-c80d-e1e7d57ac908",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".primary-button-component-wp",
                originalId:
                  "686cc039586de2a84281d93c|73b0237a-5ba0-dd27-c80d-e1e7d57ac908",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1988a2e3d4c,
          },
          "e-800": {
            id: "e-800",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-255",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-799",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".primary-button-component-wp",
              originalId:
                "686cc039586de2a84281d93c|73b0237a-5ba0-dd27-c80d-e1e7d57ac908",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".primary-button-component-wp",
                originalId:
                  "686cc039586de2a84281d93c|73b0237a-5ba0-dd27-c80d-e1e7d57ac908",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1988a2e3d4c,
          },
          "e-801": {
            id: "e-801",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-250",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-802",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "686d0a980118e9c9496e05e0|1b117166-1f13-91da-d9c6-b81af848a138",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "686d0a980118e9c9496e05e0|1b117166-1f13-91da-d9c6-b81af848a138",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19898860eb6,
          },
          "e-803": {
            id: "e-803",
            name: "",
            animationType: "custom",
            eventTypeId: "NAVBAR_OPEN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-256",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-804",
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              id: "fc57b104-a718-ea6a-5c8a-20e490f353e5",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "fc57b104-a718-ea6a-5c8a-20e490f353e5",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1989a89184b,
          },
          "e-804": {
            id: "e-804",
            name: "",
            animationType: "custom",
            eventTypeId: "NAVBAR_CLOSE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-257",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-803",
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              id: "fc57b104-a718-ea6a-5c8a-20e490f353e5",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "fc57b104-a718-ea6a-5c8a-20e490f353e5",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1989a89184d,
          },
          "e-805": {
            id: "e-805",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-227",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-806",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "de1fa7d3-7df1-93e3-3039-29ccf38c456e",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "de1fa7d3-7df1-93e3-3039-29ccf38c456e",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1989dfbf1bf,
          },
          "e-807": {
            id: "e-807",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-262",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".page-wrapper",
              originalId:
                "684fd519993bc96a6527ef9f|0c4fc1aa-d41a-28e5-0428-0c81789abd63",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".page-wrapper",
                originalId:
                  "684fd519993bc96a6527ef9f|0c4fc1aa-d41a-28e5-0428-0c81789abd63",
                appliesTo: "CLASS",
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-262-p",
                smoothing: 50,
                startsEntering: !1,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x1989e09e8c0,
          },
          "e-812": {
            id: "e-812",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-233",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-813",
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              id: "68a36cd6d044563fa49a8606|ffc8ef13-d636-1639-5ff0-3194b8fe3856",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68a36cd6d044563fa49a8606|ffc8ef13-d636-1639-5ff0-3194b8fe3856",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198be64c90e,
          },
          "e-814": {
            id: "e-814",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-228",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-815",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "68a36cd6d044563fa49a8606|ffc8ef13-d636-1639-5ff0-3194b8fe3856",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68a36cd6d044563fa49a8606|ffc8ef13-d636-1639-5ff0-3194b8fe3856",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198be64c90e,
          },
          "e-815": {
            id: "e-815",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-229",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-814",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "68a36cd6d044563fa49a8606|ffc8ef13-d636-1639-5ff0-3194b8fe3856",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68a36cd6d044563fa49a8606|ffc8ef13-d636-1639-5ff0-3194b8fe3856",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198be64c90e,
          },
          "e-816": {
            id: "e-816",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-234",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-817",
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              id: "68a36cd6d044563fa49a8606|ffc8ef13-d636-1639-5ff0-3194b8fe387b",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68a36cd6d044563fa49a8606|ffc8ef13-d636-1639-5ff0-3194b8fe387b",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198be64c90e,
          },
          "e-818": {
            id: "e-818",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-234",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-819",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68a36cd6d044563fa49a8606|ffc8ef13-d636-1639-5ff0-3194b8fe3b78",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68a36cd6d044563fa49a8606|ffc8ef13-d636-1639-5ff0-3194b8fe3b78",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198be64c90e,
          },
          "e-820": {
            id: "e-820",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-234",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-821",
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              id: "685549d25044265efbff38c5|1a627c48-4912-802f-159e-b3348dc4029d",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "685549d25044265efbff38c5|1a627c48-4912-802f-159e-b3348dc4029d",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1990fe4fcaf,
          },
          "e-822": {
            id: "e-822",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-234",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-823",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "685549d25044265efbff38c5|1a627c48-4912-802f-159e-b3348dc40549",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "685549d25044265efbff38c5|1a627c48-4912-802f-159e-b3348dc40549",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1990fe4fcaf,
          },
          "e-824": {
            id: "e-824",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-241",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-825",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "68a36cd6d044563fa49a8606|646053bf-44ea-bb88-7a57-f846d23cdfb0",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68a36cd6d044563fa49a8606|646053bf-44ea-bb88-7a57-f846d23cdfb0",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1992806e7db,
          },
          "e-825": {
            id: "e-825",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-266",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-824",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "68a36cd6d044563fa49a8606|646053bf-44ea-bb88-7a57-f846d23cdfb0",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68a36cd6d044563fa49a8606|646053bf-44ea-bb88-7a57-f846d23cdfb0",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1992806e7dc,
          },
          "e-826": {
            id: "e-826",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-190",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-827",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".faq",
              originalId:
                "6854ff4a14c1da3689433232|7beaa8d4-3ccf-ca48-41b8-7dfef963a15f",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".faq",
                originalId:
                  "6854ff4a14c1da3689433232|7beaa8d4-3ccf-ca48-41b8-7dfef963a15f",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x199284fd66a,
          },
          "e-827": {
            id: "e-827",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-191",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-826",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".faq",
              originalId:
                "6854ff4a14c1da3689433232|7beaa8d4-3ccf-ca48-41b8-7dfef963a15f",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".faq",
                originalId:
                  "6854ff4a14c1da3689433232|7beaa8d4-3ccf-ca48-41b8-7dfef963a15f",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x199284fd66c,
          },
          "e-828": {
            id: "e-828",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-267",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-829",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".primary-button-component-wp",
              originalId:
                "686d0a980118e9c9496e05e0|14142e8d-76fd-2ac6-2cec-579fd82f9373",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".primary-button-component-wp",
                originalId:
                  "686d0a980118e9c9496e05e0|14142e8d-76fd-2ac6-2cec-579fd82f9373",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1992d6c5b82,
          },
          "e-829": {
            id: "e-829",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-268",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-828",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".primary-button-component-wp",
              originalId:
                "686d0a980118e9c9496e05e0|14142e8d-76fd-2ac6-2cec-579fd82f9373",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".primary-button-component-wp",
                originalId:
                  "686d0a980118e9c9496e05e0|14142e8d-76fd-2ac6-2cec-579fd82f9373",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1992d6c5b82,
          },
          "e-830": {
            id: "e-830",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-206",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-831",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68c12320a24d3859ed94aa94|121ed887-1811-2cb1-c66c-64cc090ae564",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68c12320a24d3859ed94aa94|121ed887-1811-2cb1-c66c-64cc090ae564",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19933295ddc,
          },
          "e-832": {
            id: "e-832",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-252",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-833",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68c12320a24d3859ed94aa94|121ed887-1811-2cb1-c66c-64cc090ae565",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68c12320a24d3859ed94aa94|121ed887-1811-2cb1-c66c-64cc090ae565",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19933295ddc,
          },
          "e-833": {
            id: "e-833",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-253",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-832",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68c12320a24d3859ed94aa94|121ed887-1811-2cb1-c66c-64cc090ae565",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68c12320a24d3859ed94aa94|121ed887-1811-2cb1-c66c-64cc090ae565",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19933295ddc,
          },
          "e-834": {
            id: "e-834",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-269",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-835",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".fs-toc_h-trigger",
              originalId:
                "673f26f1916540b693fd7376|02054c7a-e731-0ad4-0372-0c74c9dd3f54",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".fs-toc_h-trigger",
                originalId:
                  "673f26f1916540b693fd7376|02054c7a-e731-0ad4-0372-0c74c9dd3f54",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x180a08abdd2,
          },
          "e-835": {
            id: "e-835",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-270",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-834",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".fs-toc_h-trigger",
              originalId:
                "673f26f1916540b693fd7376|02054c7a-e731-0ad4-0372-0c74c9dd3f54",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".fs-toc_h-trigger",
                originalId:
                  "673f26f1916540b693fd7376|02054c7a-e731-0ad4-0372-0c74c9dd3f54",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x180a08abdd6,
          },
          "e-836": {
            id: "e-836",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-206",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-837",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68c12bda6f7c6b331bc3dbbe|cef3dec1-8acc-f992-3661-791821c20cdd",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68c12bda6f7c6b331bc3dbbe|cef3dec1-8acc-f992-3661-791821c20cdd",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19937d665a4,
          },
          "e-838": {
            id: "e-838",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-252",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-839",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68c12bda6f7c6b331bc3dbbe|cef3dec1-8acc-f992-3661-791821c20cde",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68c12bda6f7c6b331bc3dbbe|cef3dec1-8acc-f992-3661-791821c20cde",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19937d665a4,
          },
          "e-839": {
            id: "e-839",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-253",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-838",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68c12bda6f7c6b331bc3dbbe|cef3dec1-8acc-f992-3661-791821c20cde",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68c12bda6f7c6b331bc3dbbe|cef3dec1-8acc-f992-3661-791821c20cde",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19937d665a4,
          },
          "e-840": {
            id: "e-840",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-271",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-841",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".primary-button-component-wp",
              originalId:
                "68a36cd6d044563fa49a8606|2fce4fda-cbf1-2f4a-e98f-6c9d633a45d9",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".primary-button-component-wp",
                originalId:
                  "68a36cd6d044563fa49a8606|2fce4fda-cbf1-2f4a-e98f-6c9d633a45d9",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1993d7f7fe6,
          },
          "e-841": {
            id: "e-841",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-272",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-840",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".primary-button-component-wp",
              originalId:
                "68a36cd6d044563fa49a8606|2fce4fda-cbf1-2f4a-e98f-6c9d633a45d9",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".primary-button-component-wp",
                originalId:
                  "68a36cd6d044563fa49a8606|2fce4fda-cbf1-2f4a-e98f-6c9d633a45d9",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1993d7f7fe6,
          },
          "e-842": {
            id: "e-842",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-233",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-843",
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              id: "68c3c33072fc1a39364d20ba|242df5ab-6612-ca3d-be7f-814b319f8f95",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68c3c33072fc1a39364d20ba|242df5ab-6612-ca3d-be7f-814b319f8f95",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19957de2d98,
          },
          "e-844": {
            id: "e-844",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-228",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-845",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "68c3c33072fc1a39364d20ba|242df5ab-6612-ca3d-be7f-814b319f8f95",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68c3c33072fc1a39364d20ba|242df5ab-6612-ca3d-be7f-814b319f8f95",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19957de2d98,
          },
          "e-845": {
            id: "e-845",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-229",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-844",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "68c3c33072fc1a39364d20ba|242df5ab-6612-ca3d-be7f-814b319f8f95",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68c3c33072fc1a39364d20ba|242df5ab-6612-ca3d-be7f-814b319f8f95",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19957de2d98,
          },
          "e-846": {
            id: "e-846",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-234",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-847",
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              id: "68c3c33072fc1a39364d20ba|242df5ab-6612-ca3d-be7f-814b319f8fba",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68c3c33072fc1a39364d20ba|242df5ab-6612-ca3d-be7f-814b319f8fba",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19957de2d98,
          },
          "e-848": {
            id: "e-848",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-241",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-849",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68c3c33072fc1a39364d20ba|242df5ab-6612-ca3d-be7f-814b319f925e",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68c3c33072fc1a39364d20ba|242df5ab-6612-ca3d-be7f-814b319f925e",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19957de2d98,
          },
          "e-849": {
            id: "e-849",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-266",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-848",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68c3c33072fc1a39364d20ba|242df5ab-6612-ca3d-be7f-814b319f925e",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68c3c33072fc1a39364d20ba|242df5ab-6612-ca3d-be7f-814b319f925e",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19957de2d98,
          },
          "e-850": {
            id: "e-850",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-234",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-851",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68c3c33072fc1a39364d20ba|242df5ab-6612-ca3d-be7f-814b319f9268",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68c3c33072fc1a39364d20ba|242df5ab-6612-ca3d-be7f-814b319f9268",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19957de2d98,
          },
          "e-852": {
            id: "e-852",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-273",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-853",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".primary-button-component-wp",
              originalId:
                "68a36cd6d044563fa49a8606|4677765e-af99-7a1f-1fb7-400554290cba",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".primary-button-component-wp",
                originalId:
                  "68a36cd6d044563fa49a8606|4677765e-af99-7a1f-1fb7-400554290cba",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1997ba9e563,
          },
          "e-853": {
            id: "e-853",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-274",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-852",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".primary-button-component-wp",
              originalId:
                "68a36cd6d044563fa49a8606|4677765e-af99-7a1f-1fb7-400554290cba",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".primary-button-component-wp",
                originalId:
                  "68a36cd6d044563fa49a8606|4677765e-af99-7a1f-1fb7-400554290cba",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1997ba9e563,
          },
          "e-854": {
            id: "e-854",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-275",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-855",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b21053626d9cdea2e5eb77|4aca58ec-6ec4-65a6-365e-d22a0c204085",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b21053626d9cdea2e5eb77|4aca58ec-6ec4-65a6-365e-d22a0c204085",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x199b854cb21,
          },
          "e-855": {
            id: "e-855",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-276",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-854",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b21053626d9cdea2e5eb77|4aca58ec-6ec4-65a6-365e-d22a0c204085",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b21053626d9cdea2e5eb77|4aca58ec-6ec4-65a6-365e-d22a0c204085",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x199b854cb23,
          },
          "e-856": {
            id: "e-856",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_MOVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-277",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b21053626d9cdea2e5eb77|4aca58ec-6ec4-65a6-365e-d22a0c204085",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b21053626d9cdea2e5eb77|4aca58ec-6ec4-65a6-365e-d22a0c204085",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-277-p",
                selectedAxis: "X_AXIS",
                basedOn: "ELEMENT",
                reverse: !1,
                smoothing: 50,
                restingState: 100,
              },
              {
                continuousParameterGroupId: "a-277-p-2",
                selectedAxis: "Y_AXIS",
                basedOn: "ELEMENT",
                reverse: !1,
                smoothing: 50,
                restingState: 50,
              },
            ],
            createdOn: 0x199b85796ec,
          },
          "e-857": {
            id: "e-857",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-227",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-858",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "de1fa7d3-7df1-93e3-3039-29ccf38c4571",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "de1fa7d3-7df1-93e3-3039-29ccf38c4571",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x199c2a2c112,
          },
        },
        actionLists: {
          "a-3": {
            id: "a-3",
            title: "Button[ hover in ]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-3-n-5",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button",
                        selectorGuids: ["e112046e-db2f-9925-ef0b-3c4b84f47b03"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-3-n-7",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button",
                        selectorGuids: ["e112046e-db2f-9925-ef0b-3c4b84f47b03"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-3-n-6",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button",
                        selectorGuids: ["e112046e-db2f-9925-ef0b-3c4b84f47b03"],
                      },
                      xValue: 0.975,
                      yValue: 0.975,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-3-n-8",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button",
                        selectorGuids: ["e112046e-db2f-9925-ef0b-3c4b84f47b03"],
                      },
                      value: 0.8,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18f4da31667,
          },
          "a-4": {
            id: "a-4",
            title: "Button[ hover out ]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-4-n-3",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button",
                        selectorGuids: ["e112046e-db2f-9925-ef0b-3c4b84f47b03"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-4-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button",
                        selectorGuids: ["e112046e-db2f-9925-ef0b-3c4b84f47b03"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18f4da31667,
          },
          "a-260": {
            id: "a-260",
            title: "Tertiary [IN]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-260-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: "._1-5rem-icon.tertiary",
                        selectorGuids: [
                          "036c311b-4f2f-40ea-0f8b-bfd96aa80bd9",
                          "0ced9b86-db14-bc03-c4d0-fecfdf324376",
                        ],
                      },
                      xValue: 0,
                      xUnit: "px",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-260-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "easeIn",
                      duration: 250,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: "._1-5rem-icon.tertiary",
                        selectorGuids: [
                          "036c311b-4f2f-40ea-0f8b-bfd96aa80bd9",
                          "0ced9b86-db14-bc03-c4d0-fecfdf324376",
                        ],
                      },
                      xValue: 5,
                      xUnit: "px",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1989d4bf647,
          },
          "a-261": {
            id: "a-261",
            title: "Tertiary [OUT]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-261-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "easeIn",
                      duration: 250,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: "._1-5rem-icon.tertiary",
                        selectorGuids: [
                          "036c311b-4f2f-40ea-0f8b-bfd96aa80bd9",
                          "0ced9b86-db14-bc03-c4d0-fecfdf324376",
                        ],
                      },
                      xValue: 0,
                      xUnit: "px",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1989d4bf647,
          },
          a: {
            id: "a",
            title: "compliance hov in",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-n-15",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-n-17",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-n-12",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-n-11",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-n-13",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {},
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-n-18",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-n-14",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {},
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-n-16",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 400,
                      target: {},
                      widthUnit: "PX",
                      heightUnit: "AUTO",
                      locked: !1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18f4cec3aa4,
          },
          "a-2": {
            id: "a-2",
            title: "compliance hov out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-2-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {},
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-2-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {},
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {},
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-5",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 400,
                      target: {},
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-6",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {},
                      globalSwatchId: "",
                      rValue: 25,
                      bValue: 25,
                      gValue: 25,
                      aValue: 1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18f4cec3aa4,
          },
          "a-69": {
            id: "a-69",
            title: "faq open",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-69-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-69-n-5",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      globalSwatchId: "",
                      rValue: 255,
                      bValue: 255,
                      gValue: 255,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-69-n-4",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-69-n-3",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-69-n-2",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      globalSwatchId: "",
                      rValue: 255,
                      bValue: 255,
                      gValue: 255,
                      aValue: 0.1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-69-n-6",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {},
                      widthUnit: "PX",
                      heightUnit: "AUTO",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-69-n-10",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {},
                      globalSwatchId: "",
                      rValue: 255,
                      bValue: 255,
                      gValue: 255,
                      aValue: 0.8,
                    },
                  },
                  {
                    id: "a-69-n-9",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {},
                      zValue: 45,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-69-n-8",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {},
                      zValue: 45,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-69-n-7",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {},
                      globalSwatchId: "",
                      rValue: 0,
                      bValue: 0,
                      gValue: 0,
                      aValue: 1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18fdf334475,
          },
          "a-70": {
            id: "a-70",
            title: "faq close",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-70-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {},
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-70-n-2",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {},
                      globalSwatchId: "",
                      rValue: 255,
                      bValue: 255,
                      gValue: 255,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-70-n-3",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {},
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-70-n-4",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {},
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-70-n-5",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {},
                      globalSwatchId: "",
                      rValue: 255,
                      bValue: 255,
                      gValue: 255,
                      aValue: 0.1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18fdf334475,
          },
          "a-91": {
            id: "a-91",
            title: "Result slider - In view",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-91-n",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      globalSwatchId: "",
                      rValue: 255,
                      bValue: 255,
                      gValue: 255,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-91-n-2",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {},
                      value: "none",
                    },
                  },
                  {
                    id: "a-91-n-3",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      globalSwatchId: "",
                      rValue: 4,
                      bValue: 30,
                      gValue: 10,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-91-n-4",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      globalSwatchId: "",
                      rValue: 4,
                      bValue: 30,
                      gValue: 10,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-91-n-5",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-91-n-6",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-91-n-7",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 350,
                      target: {},
                      globalSwatchId: "",
                      rValue: 108,
                      bValue: 217,
                      gValue: 135,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-91-n-8",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 350,
                      target: {},
                      globalSwatchId: "",
                      rValue: 255,
                      bValue: 255,
                      gValue: 255,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-91-n-9",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 350,
                      target: {},
                      globalSwatchId: "",
                      rValue: 255,
                      bValue: 255,
                      gValue: 255,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-91-n-10",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 350,
                      target: {},
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-91-n-11",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 350,
                      target: {},
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-91-n-12",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 0,
                      target: {},
                      value: "block",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18f80f0c12a,
          },
          "a-92": {
            id: "a-92",
            title: "Result slider - View out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-92-n",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 350,
                      target: {},
                      globalSwatchId: "",
                      rValue: 255,
                      bValue: 255,
                      gValue: 255,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-92-n-2",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 0,
                      target: {},
                      value: "none",
                    },
                  },
                  {
                    id: "a-92-n-3",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 350,
                      target: {},
                      globalSwatchId: "",
                      rValue: 4,
                      bValue: 30,
                      gValue: 10,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-92-n-4",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 350,
                      target: {},
                      globalSwatchId: "",
                      rValue: 4,
                      bValue: 30,
                      gValue: 10,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-92-n-5",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 350,
                      target: {},
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-92-n-6",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 350,
                      target: {},
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18f80f0c12a,
          },
          "a-113": {
            id: "a-113",
            title: "Grc dp - open",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-113-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-113-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-113-n-3",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 550,
                      target: {},
                      widthUnit: "PX",
                      heightUnit: "AUTO",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-113-n-4",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 750,
                      target: {},
                      zValue: 180,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18ff28345b6,
          },
          "a-114": {
            id: "a-114",
            title: "Grc dp - Close",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-114-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 400,
                      target: {},
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-114-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 400,
                      target: {},
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18ff28345b6,
          },
          "a-34": {
            id: "a-34",
            title: "Platform-card-1-open",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-34-n-2",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 750,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".platform-card._1",
                        selectorGuids: [
                          "28403675-bcdc-645b-a8dc-8c0bd43d5429",
                          "ef870dfe-c55e-b10d-83f8-3d67ee355ba6",
                        ],
                      },
                      widthValue: 60,
                      widthUnit: "%",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-34-n-7",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 750,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".platform-card._1",
                        selectorGuids: [
                          "28403675-bcdc-645b-a8dc-8c0bd43d5429",
                          "ef870dfe-c55e-b10d-83f8-3d67ee355ba6",
                        ],
                      },
                      globalSwatchId:
                        "--color--accent-1\\<deleted\\|variable-3fd490aa-ff70-008a-2850-14679557e815\\>",
                      rValue: 255,
                      bValue: 0,
                      gValue: 179,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-34-n-10",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 750,
                      target: {},
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-34-n-11",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 750,
                      target: {},
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-34-n-13",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 750,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".platform-card._2",
                        selectorGuids: [
                          "28403675-bcdc-645b-a8dc-8c0bd43d5429",
                          "3f52e6b6-614e-7b7e-fd5d-f1df5bc33e3c",
                        ],
                      },
                      widthValue: 33,
                      widthUnit: "%",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-34-n-14",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 750,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".platform-card._3",
                        selectorGuids: [
                          "28403675-bcdc-645b-a8dc-8c0bd43d5429",
                          "0bbf8f2b-d611-0387-da0d-3174f48ab9da",
                        ],
                      },
                      widthValue: 33,
                      widthUnit: "%",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-34-n-15",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 750,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".platform-card._2",
                        selectorGuids: [
                          "28403675-bcdc-645b-a8dc-8c0bd43d5429",
                          "3f52e6b6-614e-7b7e-fd5d-f1df5bc33e3c",
                        ],
                      },
                      globalSwatchId:
                        "--color--bg-3\\<deleted\\|variable-3dbd8cbd-615f-b2bc-5395-a083c936eef8\\>",
                      rValue: 249,
                      bValue: 255,
                      gValue: 250,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-34-n-16",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 750,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".platform-card._3",
                        selectorGuids: [
                          "28403675-bcdc-645b-a8dc-8c0bd43d5429",
                          "0bbf8f2b-d611-0387-da0d-3174f48ab9da",
                        ],
                      },
                      globalSwatchId:
                        "--color--bg-3\\<deleted\\|variable-3dbd8cbd-615f-b2bc-5395-a083c936eef8\\>",
                      rValue: 249,
                      bValue: 255,
                      gValue: 250,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-34-n-17",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 750,
                      target: {},
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-34-n-18",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 750,
                      target: {},
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-34-n-19",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 750,
                      target: {},
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-34-n-20",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 750,
                      target: {},
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-34-n-21",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {},
                      value: "none",
                    },
                  },
                  {
                    id: "a-34-n-22",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {},
                      value: "none",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-34-n-5",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {},
                      value: "block",
                    },
                  },
                  {
                    id: "a-34-n-24",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {},
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-34-n-23",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 750,
                      target: {},
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18f6bf04582,
          },
          "a-121": {
            id: "a-121",
            title: "Platform-card-2-open",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-121-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 750,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".platform-card._1",
                        selectorGuids: [
                          "28403675-bcdc-645b-a8dc-8c0bd43d5429",
                          "ef870dfe-c55e-b10d-83f8-3d67ee355ba6",
                        ],
                      },
                      widthValue: 33,
                      widthUnit: "%",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-121-n-2",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 750,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".platform-card._1",
                        selectorGuids: [
                          "28403675-bcdc-645b-a8dc-8c0bd43d5429",
                          "ef870dfe-c55e-b10d-83f8-3d67ee355ba6",
                        ],
                      },
                      globalSwatchId:
                        "--color--bg-3\\<deleted\\|variable-3dbd8cbd-615f-b2bc-5395-a083c936eef8\\>",
                      rValue: 249,
                      bValue: 255,
                      gValue: 250,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-121-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 750,
                      target: {},
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-121-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 750,
                      target: {},
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-121-n-5",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 750,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".platform-card._2",
                        selectorGuids: [
                          "28403675-bcdc-645b-a8dc-8c0bd43d5429",
                          "3f52e6b6-614e-7b7e-fd5d-f1df5bc33e3c",
                        ],
                      },
                      widthValue: 60,
                      widthUnit: "%",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-121-n-6",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 750,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".platform-card._3",
                        selectorGuids: [
                          "28403675-bcdc-645b-a8dc-8c0bd43d5429",
                          "0bbf8f2b-d611-0387-da0d-3174f48ab9da",
                        ],
                      },
                      widthValue: 33,
                      widthUnit: "%",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-121-n-7",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 750,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".platform-card._2",
                        selectorGuids: [
                          "28403675-bcdc-645b-a8dc-8c0bd43d5429",
                          "3f52e6b6-614e-7b7e-fd5d-f1df5bc33e3c",
                        ],
                      },
                      globalSwatchId:
                        "--color--accent-1\\<deleted\\|variable-3fd490aa-ff70-008a-2850-14679557e815\\>",
                      rValue: 255,
                      bValue: 0,
                      gValue: 179,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-121-n-8",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 750,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".platform-card._3",
                        selectorGuids: [
                          "28403675-bcdc-645b-a8dc-8c0bd43d5429",
                          "0bbf8f2b-d611-0387-da0d-3174f48ab9da",
                        ],
                      },
                      globalSwatchId:
                        "--color--bg-3\\<deleted\\|variable-3dbd8cbd-615f-b2bc-5395-a083c936eef8\\>",
                      rValue: 249,
                      bValue: 255,
                      gValue: 250,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-121-n-9",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 750,
                      target: {},
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-121-n-10",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 750,
                      target: {},
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-121-n-11",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 750,
                      target: {},
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-121-n-12",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 750,
                      target: {},
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-121-n-14",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {},
                      value: "none",
                    },
                  },
                  {
                    id: "a-121-n-15",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {},
                      value: "none",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-121-n-13",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {},
                      value: "block",
                    },
                  },
                  {
                    id: "a-121-n-16",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {},
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-121-n-17",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 750,
                      target: {},
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18f6bf04582,
          },
          "a-122": {
            id: "a-122",
            title: "Platform-card-3-open",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-122-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 750,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".platform-card._1",
                        selectorGuids: [
                          "28403675-bcdc-645b-a8dc-8c0bd43d5429",
                          "ef870dfe-c55e-b10d-83f8-3d67ee355ba6",
                        ],
                      },
                      widthValue: 33,
                      widthUnit: "%",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-122-n-2",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 750,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".platform-card._1",
                        selectorGuids: [
                          "28403675-bcdc-645b-a8dc-8c0bd43d5429",
                          "ef870dfe-c55e-b10d-83f8-3d67ee355ba6",
                        ],
                      },
                      globalSwatchId:
                        "--color--bg-3\\<deleted\\|variable-3dbd8cbd-615f-b2bc-5395-a083c936eef8\\>",
                      rValue: 249,
                      bValue: 255,
                      gValue: 250,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-122-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 750,
                      target: {},
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-122-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 750,
                      target: {},
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-122-n-5",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 750,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".platform-card._2",
                        selectorGuids: [
                          "28403675-bcdc-645b-a8dc-8c0bd43d5429",
                          "3f52e6b6-614e-7b7e-fd5d-f1df5bc33e3c",
                        ],
                      },
                      widthValue: 33,
                      widthUnit: "%",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-122-n-6",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 750,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".platform-card._3",
                        selectorGuids: [
                          "28403675-bcdc-645b-a8dc-8c0bd43d5429",
                          "0bbf8f2b-d611-0387-da0d-3174f48ab9da",
                        ],
                      },
                      widthValue: 60,
                      widthUnit: "%",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-122-n-7",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 750,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".platform-card._2",
                        selectorGuids: [
                          "28403675-bcdc-645b-a8dc-8c0bd43d5429",
                          "3f52e6b6-614e-7b7e-fd5d-f1df5bc33e3c",
                        ],
                      },
                      globalSwatchId:
                        "--color--bg-3\\<deleted\\|variable-3dbd8cbd-615f-b2bc-5395-a083c936eef8\\>",
                      rValue: 249,
                      bValue: 255,
                      gValue: 250,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-122-n-8",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 750,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".platform-card._3",
                        selectorGuids: [
                          "28403675-bcdc-645b-a8dc-8c0bd43d5429",
                          "0bbf8f2b-d611-0387-da0d-3174f48ab9da",
                        ],
                      },
                      globalSwatchId:
                        "--color--accent-1\\<deleted\\|variable-3fd490aa-ff70-008a-2850-14679557e815\\>",
                      rValue: 255,
                      bValue: 0,
                      gValue: 179,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-122-n-9",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 750,
                      target: {},
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-122-n-10",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 750,
                      target: {},
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-122-n-11",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 750,
                      target: {},
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-122-n-12",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 750,
                      target: {},
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-122-n-13",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {},
                      value: "none",
                    },
                  },
                  {
                    id: "a-122-n-15",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {},
                      value: "none",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-122-n-14",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {},
                      value: "block",
                    },
                  },
                  {
                    id: "a-122-n-16",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {},
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-122-n-17",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 750,
                      target: {},
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18f6bf04582,
          },
          "a-123": {
            id: "a-123",
            title: "Manage cycle scrolling Desk Tab",
            continuousParameterGroups: [
              {
                id: "a-123-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-123-n-5",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 0.2,
                          unit: "",
                        },
                      },
                      {
                        id: "a-123-n-6",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 0.2,
                          unit: "",
                        },
                      },
                      {
                        id: "a-123-n-7",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 0.2,
                          unit: "",
                        },
                      },
                      {
                        id: "a-123-n-8",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 0.1,
                          unit: "",
                        },
                      },
                      {
                        id: "a-123-n-11",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 0.1,
                          unit: "",
                        },
                      },
                      {
                        id: "a-123-n-12",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 0.1,
                          unit: "",
                        },
                      },
                      {
                        id: "a-123-n-29",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          xValue: 0.8,
                          yValue: 0.8,
                          locked: !0,
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 25,
                    actionItems: [
                      {
                        id: "a-123-n-25",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 1,
                          unit: "",
                        },
                      },
                      {
                        id: "a-123-n-26",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 1,
                          unit: "",
                        },
                      },
                      {
                        id: "a-123-n-30",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          xValue: 1,
                          yValue: 1,
                          locked: !0,
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 30,
                    actionItems: [
                      {
                        id: "a-123-n",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 1,
                          unit: "",
                        },
                      },
                      {
                        id: "a-123-n-3",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 0,
                          unit: "",
                        },
                      },
                      {
                        id: "a-123-n-9",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 1,
                          unit: "",
                        },
                      },
                      {
                        id: "a-123-n-13",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 0.1,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 50,
                    actionItems: [
                      {
                        id: "a-123-n-2",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 0,
                          unit: "",
                        },
                      },
                      {
                        id: "a-123-n-4",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 1,
                          unit: "",
                        },
                      },
                      {
                        id: "a-123-n-10",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 0.1,
                          unit: "",
                        },
                      },
                      {
                        id: "a-123-n-14",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 1,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 55,
                    actionItems: [
                      {
                        id: "a-123-n-16",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 1,
                          unit: "",
                        },
                      },
                      {
                        id: "a-123-n-19",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 0,
                          unit: "",
                        },
                      },
                      {
                        id: "a-123-n-18",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 1,
                          unit: "",
                        },
                      },
                      {
                        id: "a-123-n-20",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 0.1,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 75,
                    actionItems: [
                      {
                        id: "a-123-n-21",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 0,
                          unit: "",
                        },
                      },
                      {
                        id: "a-123-n-22",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 1,
                          unit: "",
                        },
                      },
                      {
                        id: "a-123-n-23",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 0.25,
                          unit: "",
                        },
                      },
                      {
                        id: "a-123-n-24",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 1,
                          unit: "",
                        },
                      },
                      {
                        id: "a-123-n-31",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          xValue: 1,
                          yValue: 1,
                          locked: !0,
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-123-n-33",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 0.1,
                          unit: "",
                        },
                      },
                      {
                        id: "a-123-n-32",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          xValue: 0.8,
                          yValue: 0.8,
                          locked: !0,
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x1901cce567a,
          },
          "a-128": {
            id: "a-128",
            title: "fs-toc EXPAND",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-128-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-128-n-2",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 200,
                      target: {},
                      widthUnit: "PX",
                      heightUnit: "AUTO",
                      locked: !1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18071d6c566,
          },
          "a-129": {
            id: "a-129",
            title: "fs-toc COLLAPSE",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-129-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 200,
                      target: {},
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18071d6c566,
          },
          "a-133": {
            id: "a-133",
            title: "Reggie benefits content scroll",
            continuousParameterGroups: [
              {
                id: "a-133-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-133-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          yValue: 53,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-133-n-4",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          yValue: 53,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-133-n-6",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          yValue: 53,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-133-n-7",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          yValue: 53,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-133-n-16",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 0,
                          unit: "",
                        },
                      },
                      {
                        id: "a-133-n-18",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 0,
                          unit: "",
                        },
                      },
                      {
                        id: "a-133-n-19",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 0,
                          unit: "",
                        },
                      },
                      {
                        id: "a-133-n-20",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 0,
                          unit: "",
                        },
                      },
                      {
                        id: "a-133-n-51",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          xValue: 0.75,
                          yValue: 0.75,
                          locked: !0,
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 12.5,
                    actionItems: [
                      {
                        id: "a-133-n-35",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          xValue: 1,
                          yValue: 1,
                          locked: !0,
                        },
                      },
                      {
                        id: "a-133-n-37",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 1,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 25,
                    actionItems: [
                      {
                        id: "a-133-n-2",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          yValue: 0,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-133-n-3",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          yValue: 53,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-133-n-17",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 1,
                          unit: "",
                        },
                      },
                      {
                        id: "a-133-n-21",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 0,
                          unit: "",
                        },
                      },
                      {
                        id: "a-133-n-36",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          xValue: 0,
                          yValue: 0,
                          locked: !0,
                        },
                      },
                      {
                        id: "a-133-n-38",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 0,
                          unit: "",
                        },
                      },
                      {
                        id: "a-133-n-52",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          xValue: 1,
                          yValue: 1,
                          locked: !0,
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 37.5,
                    actionItems: [
                      {
                        id: "a-133-n-12",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          xValue: 1,
                          yValue: 1,
                          locked: !0,
                        },
                      },
                      {
                        id: "a-133-n-14",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 1,
                          unit: "",
                        },
                      },
                      {
                        id: "a-133-n-53",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 1,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 40,
                    actionItems: [
                      {
                        id: "a-133-n-39",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 1,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 45,
                    actionItems: [
                      {
                        id: "a-133-n-40",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 0,
                          unit: "",
                        },
                      },
                      {
                        id: "a-133-n-41",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 0,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 50,
                    actionItems: [
                      {
                        id: "a-133-n-5",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          yValue: 0,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-133-n-8",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          yValue: 53,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-133-n-13",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          xValue: 0,
                          yValue: 0,
                          locked: !0,
                        },
                      },
                      {
                        id: "a-133-n-15",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 0,
                          unit: "",
                        },
                      },
                      {
                        id: "a-133-n-22",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 1,
                          unit: "",
                        },
                      },
                      {
                        id: "a-133-n-23",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 0,
                          unit: "",
                        },
                      },
                      {
                        id: "a-133-n-42",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 1,
                          unit: "",
                        },
                      },
                      {
                        id: "a-133-n-54",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 0.5,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 62.5,
                    actionItems: [
                      {
                        id: "a-133-n-27",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          xValue: 1,
                          yValue: 1,
                          locked: !0,
                        },
                      },
                      {
                        id: "a-133-n-28",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 1,
                          unit: "",
                        },
                      },
                      {
                        id: "a-133-n-55",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 1,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 65,
                    actionItems: [
                      {
                        id: "a-133-n-43",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 1,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 70,
                    actionItems: [
                      {
                        id: "a-133-n-44",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 0,
                          unit: "",
                        },
                      },
                      {
                        id: "a-133-n-45",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 0,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 75,
                    actionItems: [
                      {
                        id: "a-133-n-9",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          yValue: 0,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-133-n-10",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          yValue: 53,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-133-n-24",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 1,
                          unit: "",
                        },
                      },
                      {
                        id: "a-133-n-25",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 0,
                          unit: "",
                        },
                      },
                      {
                        id: "a-133-n-29",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          xValue: 0,
                          yValue: 0,
                          locked: !0,
                        },
                      },
                      {
                        id: "a-133-n-30",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 0,
                          unit: "",
                        },
                      },
                      {
                        id: "a-133-n-46",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 1,
                          unit: "",
                        },
                      },
                      {
                        id: "a-133-n-56",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 0.5,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 87.5,
                    actionItems: [
                      {
                        id: "a-133-n-31",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          xValue: 1,
                          yValue: 1,
                          locked: !0,
                        },
                      },
                      {
                        id: "a-133-n-32",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 1,
                          unit: "",
                        },
                      },
                      {
                        id: "a-133-n-57",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 1,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 90,
                    actionItems: [
                      {
                        id: "a-133-n-47",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 1,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 95,
                    actionItems: [
                      {
                        id: "a-133-n-48",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 0,
                          unit: "",
                        },
                      },
                      {
                        id: "a-133-n-49",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 0,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-133-n-11",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          yValue: 0,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-133-n-26",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 1,
                          unit: "",
                        },
                      },
                      {
                        id: "a-133-n-33",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          xValue: 0,
                          yValue: 0,
                          locked: !0,
                        },
                      },
                      {
                        id: "a-133-n-34",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 0,
                          unit: "",
                        },
                      },
                      {
                        id: "a-133-n-50",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 1,
                          unit: "",
                        },
                      },
                      {
                        id: "a-133-n-58",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 0.5,
                          unit: "",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x19035551d9e,
          },
          "a-136": {
            id: "a-136",
            title: "Reg Topics Accordion open",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-136-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-136-n-3",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      xValue: null,
                      zValue: 0,
                      xUnit: "deg",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-136-n-2",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 750,
                      target: {},
                      widthUnit: "PX",
                      heightUnit: "AUTO",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-136-n-4",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 750,
                      target: {},
                      xValue: null,
                      zValue: 180,
                      xUnit: "deg",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x190399f9113,
          },
          "a-137": {
            id: "a-137",
            title: "Reg Topics Accordion close",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-137-n-3",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 750,
                      target: {},
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-137-n-4",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 750,
                      target: {},
                      xValue: null,
                      zValue: 0,
                      xUnit: "deg",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x190399f9113,
          },
          "a-138": {
            id: "a-138",
            title: "Partner highlight text",
            continuousParameterGroups: [
              {
                id: "a-138-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-138-n",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 0,
                          unit: "",
                        },
                      },
                      {
                        id: "a-138-n-3",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 0,
                          unit: "",
                        },
                      },
                      {
                        id: "a-138-n-4",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 0,
                          unit: "",
                        },
                      },
                      {
                        id: "a-138-n-5",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 0,
                          unit: "",
                        },
                      },
                      {
                        id: "a-138-n-12",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 0,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 10,
                    actionItems: [
                      {
                        id: "a-138-n-2",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 1,
                          unit: "",
                        },
                      },
                      {
                        id: "a-138-n-6",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 0,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 20,
                    actionItems: [
                      {
                        id: "a-138-n-7",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 1,
                          unit: "",
                        },
                      },
                      {
                        id: "a-138-n-8",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 0,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 30,
                    actionItems: [
                      {
                        id: "a-138-n-9",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 1,
                          unit: "",
                        },
                      },
                      {
                        id: "a-138-n-10",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 0,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 40,
                    actionItems: [
                      {
                        id: "a-138-n-11",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 1,
                          unit: "",
                        },
                      },
                      {
                        id: "a-138-n-13",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 0,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 50,
                    actionItems: [
                      {
                        id: "a-138-n-14",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 1,
                          unit: "",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x19039cea324,
          },
          "a-139": {
            id: "a-139",
            title: "GenAI Searchbar appear",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-139-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      xValue: 0,
                      yValue: 0,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-139-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      xValue: 0,
                      yValue: 0,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-139-n-5",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-139-n-6",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-139-n-7",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 350,
                      target: {},
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-139-n-3",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 350,
                      target: {},
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-139-n-4",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 50,
                      easing: "outQuad",
                      duration: 350,
                      target: {},
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-139-n-8",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 50,
                      easing: "outQuad",
                      duration: 350,
                      target: {},
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1903ebffb3f,
          },
          "a-141": {
            id: "a-141",
            title: "Manage cycle scrolling Mob",
            continuousParameterGroups: [
              {
                id: "a-141-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-141-n",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 0.2,
                          unit: "",
                        },
                      },
                      {
                        id: "a-141-n-2",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 0.2,
                          unit: "",
                        },
                      },
                      {
                        id: "a-141-n-3",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 0.2,
                          unit: "",
                        },
                      },
                      {
                        id: "a-141-n-4",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 0.15,
                          unit: "",
                        },
                      },
                      {
                        id: "a-141-n-5",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 0,
                          unit: "",
                        },
                      },
                      {
                        id: "a-141-n-6",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 0,
                          unit: "",
                        },
                      },
                      {
                        id: "a-141-n-7",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          xValue: 1.1,
                          yValue: 1.1,
                          locked: !0,
                        },
                      },
                      {
                        id: "a-141-n-30",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          yValue: -10,
                          xUnit: "PX",
                          yUnit: "vh",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 25,
                    actionItems: [
                      {
                        id: "a-141-n-8",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 1,
                          unit: "",
                        },
                      },
                      {
                        id: "a-141-n-9",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 1,
                          unit: "",
                        },
                      },
                      {
                        id: "a-141-n-10",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          xValue: 1,
                          yValue: 1,
                          locked: !0,
                        },
                      },
                      {
                        id: "a-141-n-31",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          yValue: 0,
                          xUnit: "PX",
                          yUnit: "vh",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 30,
                    actionItems: [
                      {
                        id: "a-141-n-11",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 1,
                          unit: "",
                        },
                      },
                      {
                        id: "a-141-n-12",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 0,
                          unit: "",
                        },
                      },
                      {
                        id: "a-141-n-13",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 1,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 45,
                    actionItems: [
                      {
                        id: "a-141-n-17",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 0,
                          unit: "",
                        },
                      },
                      {
                        id: "a-141-n-14",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 0,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 50,
                    actionItems: [
                      {
                        id: "a-141-n-15",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 0,
                          unit: "",
                        },
                      },
                      {
                        id: "a-141-n-16",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 1,
                          unit: "",
                        },
                      },
                      {
                        id: "a-141-n-18",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 1,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 55,
                    actionItems: [
                      {
                        id: "a-141-n-19",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 1,
                          unit: "",
                        },
                      },
                      {
                        id: "a-141-n-20",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 0,
                          unit: "",
                        },
                      },
                      {
                        id: "a-141-n-21",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 1,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 70,
                    actionItems: [
                      {
                        id: "a-141-n-22",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 0,
                          unit: "",
                        },
                      },
                      {
                        id: "a-141-n-25",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 0,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 75,
                    actionItems: [
                      {
                        id: "a-141-n-23",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 0,
                          unit: "",
                        },
                      },
                      {
                        id: "a-141-n-24",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 1,
                          unit: "",
                        },
                      },
                      {
                        id: "a-141-n-26",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 1,
                          unit: "",
                        },
                      },
                      {
                        id: "a-141-n-27",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          xValue: 1,
                          yValue: 1,
                          locked: !0,
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-141-n-28",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 0.15,
                          unit: "",
                        },
                      },
                      {
                        id: "a-141-n-29",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          xValue: 0.8,
                          yValue: 0.8,
                          locked: !0,
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x1901cce567a,
          },
          "a-144": {
            id: "a-144",
            title: "Megamenu Desktop Open",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-144-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".nav-dd-wp",
                        selectorGuids: ["a0cae272-7b7c-8a52-9bb9-216ade5d04e4"],
                      },
                      widthValue: 100,
                      heightValue: 0,
                      widthUnit: "%",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-144-n-9",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".navbar-dd-content-wp",
                        selectorGuids: ["b0df0496-bc74-3332-da5c-93fa14fd6de9"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-144-n-3",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".nav-overlay",
                        selectorGuids: ["4390c1b1-0303-d4e6-bf78-be7cecd1f711"],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-144-n-5",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".nav-overlay",
                        selectorGuids: ["4390c1b1-0303-d4e6-bf78-be7cecd1f711"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-144-n-7",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".nav-dd-wp",
                        selectorGuids: ["a0cae272-7b7c-8a52-9bb9-216ade5d04e4"],
                      },
                      value: "none",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-144-n-4",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".nav-overlay",
                        selectorGuids: ["4390c1b1-0303-d4e6-bf78-be7cecd1f711"],
                      },
                      value: "block",
                    },
                  },
                  {
                    id: "a-144-n-8",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".nav-dd-wp",
                        selectorGuids: ["a0cae272-7b7c-8a52-9bb9-216ade5d04e4"],
                      },
                      value: "flex",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-144-n-2",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 500,
                      target: {
                        selector: ".nav-dd-wp",
                        selectorGuids: ["a0cae272-7b7c-8a52-9bb9-216ade5d04e4"],
                      },
                      widthValue: 100,
                      widthUnit: "%",
                      heightUnit: "AUTO",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-144-n-6",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 500,
                      target: {
                        selector: ".nav-overlay",
                        selectorGuids: ["4390c1b1-0303-d4e6-bf78-be7cecd1f711"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-144-n-10",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 250,
                      easing: "outCubic",
                      duration: 500,
                      target: {
                        selector: ".navbar-dd-content-wp",
                        selectorGuids: ["b0df0496-bc74-3332-da5c-93fa14fd6de9"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1904a985bdf,
          },
          "a-148": {
            id: "a-148",
            title: "MM Nav 1",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-148-n",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".navbar-dd-content-wp.nav-1",
                        selectorGuids: [
                          "b0df0496-bc74-3332-da5c-93fa14fd6de9",
                          "70274d45-9602-2cde-85e5-4015c5e2226e",
                        ],
                      },
                      value: "flex",
                    },
                  },
                  {
                    id: "a-148-n-2",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".navbar-dd-content-wp.nav-2",
                        selectorGuids: [
                          "b0df0496-bc74-3332-da5c-93fa14fd6de9",
                          "524a8772-878e-179f-b1f6-fc9d2fd63428",
                        ],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-148-n-3",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".navbar-dd-content-wp.nav-3",
                        selectorGuids: [
                          "b0df0496-bc74-3332-da5c-93fa14fd6de9",
                          "6732e8c7-d768-355f-91e0-532be48a6586",
                        ],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-148-n-4",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".navbar-dd-content-wp.nav-4",
                        selectorGuids: [
                          "b0df0496-bc74-3332-da5c-93fa14fd6de9",
                          "b2d774b0-2ec8-8f06-9d9c-32abef2e8f3f",
                        ],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-148-n-5",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".navbar-dd-content-wp.nav-5",
                        selectorGuids: [
                          "b0df0496-bc74-3332-da5c-93fa14fd6de9",
                          "9f8c41a5-97ad-81ac-0958-b1c53b86fd3a",
                        ],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-148-n-6",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".navbar-dd-content-wp.nav-6",
                        selectorGuids: [
                          "b0df0496-bc74-3332-da5c-93fa14fd6de9",
                          "44fba8e4-d116-f688-6fb8-0adbd9a0c625",
                        ],
                      },
                      value: "none",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1904aba2342,
          },
          "a-147": {
            id: "a-147",
            title: "Megamenu Close",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-147-n-5",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 300,
                      target: {
                        selector: ".navbar-dd-content-wp",
                        selectorGuids: ["b0df0496-bc74-3332-da5c-93fa14fd6de9"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-147-n-2",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 150,
                      easing: "outCubic",
                      duration: 300,
                      target: {
                        selector: ".nav-dd-wp",
                        selectorGuids: ["a0cae272-7b7c-8a52-9bb9-216ade5d04e4"],
                      },
                      widthValue: 100,
                      heightValue: 0,
                      widthUnit: "%",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-147-n-6",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 150,
                      easing: "outQuint",
                      duration: 300,
                      target: {
                        selector: ".nav-overlay",
                        selectorGuids: ["4390c1b1-0303-d4e6-bf78-be7cecd1f711"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-147-n-4",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 450,
                      easing: "outCubic",
                      duration: 0,
                      target: {
                        selector: ".nav-overlay",
                        selectorGuids: ["4390c1b1-0303-d4e6-bf78-be7cecd1f711"],
                      },
                      value: "none",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1904a985bdf,
          },
          "a-154": {
            id: "a-154",
            title: "MM Nav 3",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-154-n",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".navbar-dd-content-wp.nav-1",
                        selectorGuids: [
                          "b0df0496-bc74-3332-da5c-93fa14fd6de9",
                          "70274d45-9602-2cde-85e5-4015c5e2226e",
                        ],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-154-n-2",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".navbar-dd-content-wp.nav-2",
                        selectorGuids: [
                          "b0df0496-bc74-3332-da5c-93fa14fd6de9",
                          "524a8772-878e-179f-b1f6-fc9d2fd63428",
                        ],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-154-n-3",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".navbar-dd-content-wp.nav-3",
                        selectorGuids: [
                          "b0df0496-bc74-3332-da5c-93fa14fd6de9",
                          "6732e8c7-d768-355f-91e0-532be48a6586",
                        ],
                      },
                      value: "flex",
                    },
                  },
                  {
                    id: "a-154-n-4",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".navbar-dd-content-wp.nav-4",
                        selectorGuids: [
                          "b0df0496-bc74-3332-da5c-93fa14fd6de9",
                          "b2d774b0-2ec8-8f06-9d9c-32abef2e8f3f",
                        ],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-154-n-5",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".navbar-dd-content-wp.nav-5",
                        selectorGuids: [
                          "b0df0496-bc74-3332-da5c-93fa14fd6de9",
                          "9f8c41a5-97ad-81ac-0958-b1c53b86fd3a",
                        ],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-154-n-6",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".navbar-dd-content-wp.nav-6",
                        selectorGuids: [
                          "b0df0496-bc74-3332-da5c-93fa14fd6de9",
                          "44fba8e4-d116-f688-6fb8-0adbd9a0c625",
                        ],
                      },
                      value: "none",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1904aba2342,
          },
          "a-155": {
            id: "a-155",
            title: "MM Nav 4",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-155-n",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".navbar-dd-content-wp.nav-1",
                        selectorGuids: [
                          "b0df0496-bc74-3332-da5c-93fa14fd6de9",
                          "70274d45-9602-2cde-85e5-4015c5e2226e",
                        ],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-155-n-2",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".navbar-dd-content-wp.nav-2",
                        selectorGuids: [
                          "b0df0496-bc74-3332-da5c-93fa14fd6de9",
                          "524a8772-878e-179f-b1f6-fc9d2fd63428",
                        ],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-155-n-3",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".navbar-dd-content-wp.nav-3",
                        selectorGuids: [
                          "b0df0496-bc74-3332-da5c-93fa14fd6de9",
                          "6732e8c7-d768-355f-91e0-532be48a6586",
                        ],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-155-n-4",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".navbar-dd-content-wp.nav-4",
                        selectorGuids: [
                          "b0df0496-bc74-3332-da5c-93fa14fd6de9",
                          "b2d774b0-2ec8-8f06-9d9c-32abef2e8f3f",
                        ],
                      },
                      value: "flex",
                    },
                  },
                  {
                    id: "a-155-n-5",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".navbar-dd-content-wp.nav-5",
                        selectorGuids: [
                          "b0df0496-bc74-3332-da5c-93fa14fd6de9",
                          "9f8c41a5-97ad-81ac-0958-b1c53b86fd3a",
                        ],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-155-n-6",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".navbar-dd-content-wp.nav-6",
                        selectorGuids: [
                          "b0df0496-bc74-3332-da5c-93fa14fd6de9",
                          "44fba8e4-d116-f688-6fb8-0adbd9a0c625",
                        ],
                      },
                      value: "none",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1904aba2342,
          },
          "a-153": {
            id: "a-153",
            title: "MM Nav 2",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-153-n",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".navbar-dd-content-wp.nav-1",
                        selectorGuids: [
                          "b0df0496-bc74-3332-da5c-93fa14fd6de9",
                          "70274d45-9602-2cde-85e5-4015c5e2226e",
                        ],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-153-n-2",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".navbar-dd-content-wp.nav-2",
                        selectorGuids: [
                          "b0df0496-bc74-3332-da5c-93fa14fd6de9",
                          "524a8772-878e-179f-b1f6-fc9d2fd63428",
                        ],
                      },
                      value: "flex",
                    },
                  },
                  {
                    id: "a-153-n-3",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".navbar-dd-content-wp.nav-3",
                        selectorGuids: [
                          "b0df0496-bc74-3332-da5c-93fa14fd6de9",
                          "6732e8c7-d768-355f-91e0-532be48a6586",
                        ],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-153-n-4",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".navbar-dd-content-wp.nav-4",
                        selectorGuids: [
                          "b0df0496-bc74-3332-da5c-93fa14fd6de9",
                          "b2d774b0-2ec8-8f06-9d9c-32abef2e8f3f",
                        ],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-153-n-5",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".navbar-dd-content-wp.nav-5",
                        selectorGuids: [
                          "b0df0496-bc74-3332-da5c-93fa14fd6de9",
                          "9f8c41a5-97ad-81ac-0958-b1c53b86fd3a",
                        ],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-153-n-6",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".navbar-dd-content-wp.nav-6",
                        selectorGuids: [
                          "b0df0496-bc74-3332-da5c-93fa14fd6de9",
                          "44fba8e4-d116-f688-6fb8-0adbd9a0c625",
                        ],
                      },
                      value: "none",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1904aba2342,
          },
          "a-6": {
            id: "a-6",
            title: "Ham 1 Menu - Open",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-6-n-11",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".nav-overlay",
                        selectorGuids: ["4390c1b1-0303-d4e6-bf78-be7cecd1f711"],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-6-n-13",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".nav-links-dd-wp",
                        selectorGuids: ["5eb90974-7e38-5092-8268-4c9088319331"],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-6-n-2",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".nav-links-dd-wp",
                        selectorGuids: ["5eb90974-7e38-5092-8268-4c9088319331"],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-6-n-18",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".ham-line._3",
                        selectorGuids: [
                          "5eb90974-7e38-5092-8268-4c9088319336",
                          "5eb90974-7e38-5092-8268-4c908831933f",
                        ],
                      },
                      widthValue: 1.25,
                      widthUnit: "rem",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-6-n-19",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".ham-line._1",
                        selectorGuids: [
                          "5eb90974-7e38-5092-8268-4c9088319336",
                          "5eb90974-7e38-5092-8268-4c9088319340",
                        ],
                      },
                      widthValue: 1.25,
                      widthUnit: "rem",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-6-n-8",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".nav-links-dd-wp",
                        selectorGuids: ["5eb90974-7e38-5092-8268-4c9088319331"],
                      },
                      value: "flex",
                    },
                  },
                  {
                    id: "a-6-n-12",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".nav-overlay",
                        selectorGuids: ["4390c1b1-0303-d4e6-bf78-be7cecd1f711"],
                      },
                      value: "block",
                    },
                  },
                  {
                    id: "a-6-n-21",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".nav-links-wp",
                        selectorGuids: ["acd2c6a7-482f-7bc5-49ee-af7752a2b17e"],
                      },
                      value: "flex",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-6-n-3",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".ham-line._1",
                        selectorGuids: [
                          "5eb90974-7e38-5092-8268-4c9088319336",
                          "5eb90974-7e38-5092-8268-4c9088319340",
                        ],
                      },
                      zValue: -45,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-6-n-5",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".ham-line._3",
                        selectorGuids: [
                          "5eb90974-7e38-5092-8268-4c9088319336",
                          "5eb90974-7e38-5092-8268-4c908831933f",
                        ],
                      },
                      zValue: 45,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-6-n-14",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        selector: ".nav-links-dd-wp",
                        selectorGuids: ["5eb90974-7e38-5092-8268-4c9088319331"],
                      },
                      widthUnit: "PX",
                      heightUnit: "AUTO",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-6-n-17",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".ham-line._3",
                        selectorGuids: [
                          "5eb90974-7e38-5092-8268-4c9088319336",
                          "5eb90974-7e38-5092-8268-4c908831933f",
                        ],
                      },
                      widthValue: 1.5625,
                      widthUnit: "rem",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-6-n-16",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".ham-line._1",
                        selectorGuids: [
                          "5eb90974-7e38-5092-8268-4c9088319336",
                          "5eb90974-7e38-5092-8268-4c9088319340",
                        ],
                      },
                      widthValue: 1.5625,
                      widthUnit: "rem",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-6-n-6",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".ham-line._3",
                        selectorGuids: [
                          "5eb90974-7e38-5092-8268-4c9088319336",
                          "5eb90974-7e38-5092-8268-4c908831933f",
                        ],
                      },
                      xValue: -0.09375,
                      yValue: -0.1875,
                      xUnit: "rem",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-6-n-15",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".ham-line._1",
                        selectorGuids: [
                          "5eb90974-7e38-5092-8268-4c9088319336",
                          "5eb90974-7e38-5092-8268-4c9088319340",
                        ],
                      },
                      xValue: 0.125,
                      yValue: 0.1875,
                      xUnit: "rem",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18ee5e6d1a4,
          },
          "a-152": {
            id: "a-152",
            title: "Ham 1 Menu - Close",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-152-n-10",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        selector: ".nav-links-dd-wp",
                        selectorGuids: ["5eb90974-7e38-5092-8268-4c9088319331"],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-152-n-11",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        selector: ".ham-line._1",
                        selectorGuids: [
                          "5eb90974-7e38-5092-8268-4c9088319336",
                          "5eb90974-7e38-5092-8268-4c9088319340",
                        ],
                      },
                      widthValue: 1.25,
                      widthUnit: "rem",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-152-n-9",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        selector: ".ham-line._1",
                        selectorGuids: [
                          "5eb90974-7e38-5092-8268-4c9088319336",
                          "5eb90974-7e38-5092-8268-4c9088319340",
                        ],
                      },
                      xValue: 0,
                      yValue: 0,
                      xUnit: "rem",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-152-n-8",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        selector: ".ham-line._3",
                        selectorGuids: [
                          "5eb90974-7e38-5092-8268-4c9088319336",
                          "5eb90974-7e38-5092-8268-4c908831933f",
                        ],
                      },
                      xValue: 0,
                      yValue: 0,
                      xUnit: "rem",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-152-n-7",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        selector: ".ham-line._3",
                        selectorGuids: [
                          "5eb90974-7e38-5092-8268-4c9088319336",
                          "5eb90974-7e38-5092-8268-4c908831933f",
                        ],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-152-n-6",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        selector: ".ham-line._1",
                        selectorGuids: [
                          "5eb90974-7e38-5092-8268-4c9088319336",
                          "5eb90974-7e38-5092-8268-4c9088319340",
                        ],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-152-n-5",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".nav-overlay",
                        selectorGuids: ["4390c1b1-0303-d4e6-bf78-be7cecd1f711"],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-152-n-12",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        selector: ".ham-line._3",
                        selectorGuids: [
                          "5eb90974-7e38-5092-8268-4c9088319336",
                          "5eb90974-7e38-5092-8268-4c908831933f",
                        ],
                      },
                      widthValue: 1.25,
                      widthUnit: "rem",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-152-n-4",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".nav-links-dd-wp",
                        selectorGuids: ["5eb90974-7e38-5092-8268-4c9088319331"],
                      },
                      value: "none",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18ee5e6d1a4,
          },
          "a-150": {
            id: "a-150",
            title: "Mobile Submenu open",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-150-n-6",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".nav-dd-wp",
                        selectorGuids: ["a0cae272-7b7c-8a52-9bb9-216ade5d04e4"],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-150-n-12",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "PARENT",
                        selector: ".nav-links-wp",
                        selectorGuids: ["acd2c6a7-482f-7bc5-49ee-af7752a2b17e"],
                      },
                      widthUnit: "PX",
                      heightUnit: "AUTO",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-150-n-10",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "PARENT",
                        selector: ".nav-links-wp",
                        selectorGuids: ["acd2c6a7-482f-7bc5-49ee-af7752a2b17e"],
                      },
                      xValue: 0,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-150-n-8",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".nav-dd-wp",
                        selectorGuids: ["a0cae272-7b7c-8a52-9bb9-216ade5d04e4"],
                      },
                      xValue: 0,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-150-n-7",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".nav-dd-wp",
                        selectorGuids: ["a0cae272-7b7c-8a52-9bb9-216ade5d04e4"],
                      },
                      value: "flex",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-150-n-9",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuint",
                      duration: 750,
                      target: {
                        selector: ".nav-dd-wp",
                        selectorGuids: ["a0cae272-7b7c-8a52-9bb9-216ade5d04e4"],
                      },
                      xValue: -110,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-150-n-11",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuint",
                      duration: 750,
                      target: {
                        useEventTarget: "PARENT",
                        selector: ".nav-links-wp",
                        selectorGuids: ["acd2c6a7-482f-7bc5-49ee-af7752a2b17e"],
                      },
                      xValue: -110,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-150-n-13",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 50,
                      target: {
                        useEventTarget: "PARENT",
                        selector: ".nav-links-wp",
                        selectorGuids: ["acd2c6a7-482f-7bc5-49ee-af7752a2b17e"],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1904a985bdf,
          },
          "a-151": {
            id: "a-151",
            title: "Mobile Submenu close",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-151-n-8",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 50,
                      target: {
                        selector: ".nav-links-wp",
                        selectorGuids: ["acd2c6a7-482f-7bc5-49ee-af7752a2b17e"],
                      },
                      widthUnit: "PX",
                      heightUnit: "AUTO",
                      locked: !1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-151-n-6",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuint",
                      duration: 750,
                      target: {
                        selector: ".nav-dd-wp",
                        selectorGuids: ["a0cae272-7b7c-8a52-9bb9-216ade5d04e4"],
                      },
                      xValue: 0,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-151-n-7",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuint",
                      duration: 750,
                      target: {
                        selector: ".nav-links-wp",
                        selectorGuids: ["acd2c6a7-482f-7bc5-49ee-af7752a2b17e"],
                      },
                      xValue: 0,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-151-n-5",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".nav-dd-wp",
                        selectorGuids: ["a0cae272-7b7c-8a52-9bb9-216ade5d04e4"],
                      },
                      value: "none",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1904a985bdf,
          },
          "a-158": {
            id: "a-158",
            title: "RCM Card Scroll",
            continuousParameterGroups: [
              {
                id: "a-158-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-158-n-5",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".rcm-automate-card-wp",
                            selectorGuids: [
                              "dc2032cb-a91e-2211-1492-73835bdc9117",
                            ],
                          },
                          xValue: 0.95,
                          yValue: 0.95,
                          locked: !0,
                        },
                      },
                      {
                        id: "a-158-n-9",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".rcm-automate-card-wp",
                            selectorGuids: [
                              "dc2032cb-a91e-2211-1492-73835bdc9117",
                            ],
                          },
                          value: 0.1,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 30,
                    actionItems: [
                      {
                        id: "a-158-n-7",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".rcm-automate-card-wp",
                            selectorGuids: [
                              "dc2032cb-a91e-2211-1492-73835bdc9117",
                            ],
                          },
                          xValue: 1,
                          yValue: 1,
                          locked: !0,
                        },
                      },
                      {
                        id: "a-158-n-11",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".rcm-automate-card-wp",
                            selectorGuids: [
                              "dc2032cb-a91e-2211-1492-73835bdc9117",
                            ],
                          },
                          value: 1,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 70,
                    actionItems: [
                      {
                        id: "a-158-n-8",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".rcm-automate-card-wp",
                            selectorGuids: [
                              "dc2032cb-a91e-2211-1492-73835bdc9117",
                            ],
                          },
                          xValue: 1,
                          yValue: 1,
                          locked: !0,
                        },
                      },
                      {
                        id: "a-158-n-12",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".rcm-automate-card-wp",
                            selectorGuids: [
                              "dc2032cb-a91e-2211-1492-73835bdc9117",
                            ],
                          },
                          value: 1,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-158-n-6",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".rcm-automate-card-wp",
                            selectorGuids: [
                              "dc2032cb-a91e-2211-1492-73835bdc9117",
                            ],
                          },
                          xValue: 0.95,
                          yValue: 0.95,
                          locked: !0,
                        },
                      },
                      {
                        id: "a-158-n-10",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".rcm-automate-card-wp",
                            selectorGuids: [
                              "dc2032cb-a91e-2211-1492-73835bdc9117",
                            ],
                          },
                          value: 0.1,
                          unit: "",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x1905099aa29,
          },
          "a-159": {
            id: "a-159",
            title: "fs-toc EXPAND 2",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-159-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-159-n-2",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 200,
                      target: {},
                      widthUnit: "PX",
                      heightUnit: "AUTO",
                      locked: !1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18071d6c566,
          },
          "a-160": {
            id: "a-160",
            title: "fs-toc COLLAPSE 2",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-160-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 200,
                      target: {},
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18071d6c566,
          },
          "a-161": {
            id: "a-161",
            title: "MM Nav 7",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-161-n",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".navbar-dd-content-wp.nav-1",
                        selectorGuids: [
                          "b0df0496-bc74-3332-da5c-93fa14fd6de9",
                          "70274d45-9602-2cde-85e5-4015c5e2226e",
                        ],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-161-n-2",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".navbar-dd-content-wp.nav-2",
                        selectorGuids: [
                          "b0df0496-bc74-3332-da5c-93fa14fd6de9",
                          "524a8772-878e-179f-b1f6-fc9d2fd63428",
                        ],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-161-n-3",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".navbar-dd-content-wp.nav-3",
                        selectorGuids: [
                          "b0df0496-bc74-3332-da5c-93fa14fd6de9",
                          "6732e8c7-d768-355f-91e0-532be48a6586",
                        ],
                      },
                      value: "flex",
                    },
                  },
                  {
                    id: "a-161-n-4",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".navbar-dd-content-wp.nav-4",
                        selectorGuids: [
                          "b0df0496-bc74-3332-da5c-93fa14fd6de9",
                          "b2d774b0-2ec8-8f06-9d9c-32abef2e8f3f",
                        ],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-161-n-5",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".navbar-dd-content-wp.nav-5",
                        selectorGuids: [
                          "b0df0496-bc74-3332-da5c-93fa14fd6de9",
                          "9f8c41a5-97ad-81ac-0958-b1c53b86fd3a",
                        ],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-161-n-6",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".navbar-dd-content-wp.nav-6",
                        selectorGuids: [
                          "b0df0496-bc74-3332-da5c-93fa14fd6de9",
                          "44fba8e4-d116-f688-6fb8-0adbd9a0c625",
                        ],
                      },
                      value: "none",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1904aba2342,
          },
          "a-162": {
            id: "a-162",
            title: "MM Nav 8",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-162-n",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".navbar-dd-content-wp.nav-1",
                        selectorGuids: [
                          "b0df0496-bc74-3332-da5c-93fa14fd6de9",
                          "70274d45-9602-2cde-85e5-4015c5e2226e",
                        ],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-162-n-2",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".navbar-dd-content-wp.nav-2",
                        selectorGuids: [
                          "b0df0496-bc74-3332-da5c-93fa14fd6de9",
                          "524a8772-878e-179f-b1f6-fc9d2fd63428",
                        ],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-162-n-3",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".navbar-dd-content-wp.nav-3",
                        selectorGuids: [
                          "b0df0496-bc74-3332-da5c-93fa14fd6de9",
                          "6732e8c7-d768-355f-91e0-532be48a6586",
                        ],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-162-n-4",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".navbar-dd-content-wp.nav-4",
                        selectorGuids: [
                          "b0df0496-bc74-3332-da5c-93fa14fd6de9",
                          "b2d774b0-2ec8-8f06-9d9c-32abef2e8f3f",
                        ],
                      },
                      value: "flex",
                    },
                  },
                  {
                    id: "a-162-n-5",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".navbar-dd-content-wp.nav-5",
                        selectorGuids: [
                          "b0df0496-bc74-3332-da5c-93fa14fd6de9",
                          "9f8c41a5-97ad-81ac-0958-b1c53b86fd3a",
                        ],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-162-n-6",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".navbar-dd-content-wp.nav-6",
                        selectorGuids: [
                          "b0df0496-bc74-3332-da5c-93fa14fd6de9",
                          "44fba8e4-d116-f688-6fb8-0adbd9a0c625",
                        ],
                      },
                      value: "none",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1904aba2342,
          },
          "a-163": {
            id: "a-163",
            title: "Megamenu Close 2",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-163-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 300,
                      target: {
                        selector: ".navbar-dd-content-wp",
                        selectorGuids: ["b0df0496-bc74-3332-da5c-93fa14fd6de9"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-163-n-2",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 150,
                      easing: "outCubic",
                      duration: 300,
                      target: {
                        selector: ".nav-dd-wp",
                        selectorGuids: ["a0cae272-7b7c-8a52-9bb9-216ade5d04e4"],
                      },
                      widthValue: 100,
                      heightValue: 0,
                      widthUnit: "%",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-163-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 150,
                      easing: "outQuint",
                      duration: 300,
                      target: {
                        selector: ".nav-overlay",
                        selectorGuids: ["4390c1b1-0303-d4e6-bf78-be7cecd1f711"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-163-n-4",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 450,
                      easing: "outCubic",
                      duration: 0,
                      target: {
                        selector: ".nav-overlay",
                        selectorGuids: ["4390c1b1-0303-d4e6-bf78-be7cecd1f711"],
                      },
                      value: "none",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1904a985bdf,
          },
          "a-164": {
            id: "a-164",
            title: "MM Nav 9",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-164-n",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".navbar-dd-content-wp.nav-1",
                        selectorGuids: [
                          "b0df0496-bc74-3332-da5c-93fa14fd6de9",
                          "70274d45-9602-2cde-85e5-4015c5e2226e",
                        ],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-164-n-2",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".navbar-dd-content-wp.nav-2",
                        selectorGuids: [
                          "b0df0496-bc74-3332-da5c-93fa14fd6de9",
                          "524a8772-878e-179f-b1f6-fc9d2fd63428",
                        ],
                      },
                      value: "flex",
                    },
                  },
                  {
                    id: "a-164-n-3",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".navbar-dd-content-wp.nav-3",
                        selectorGuids: [
                          "b0df0496-bc74-3332-da5c-93fa14fd6de9",
                          "6732e8c7-d768-355f-91e0-532be48a6586",
                        ],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-164-n-4",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".navbar-dd-content-wp.nav-4",
                        selectorGuids: [
                          "b0df0496-bc74-3332-da5c-93fa14fd6de9",
                          "b2d774b0-2ec8-8f06-9d9c-32abef2e8f3f",
                        ],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-164-n-5",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".navbar-dd-content-wp.nav-5",
                        selectorGuids: [
                          "b0df0496-bc74-3332-da5c-93fa14fd6de9",
                          "9f8c41a5-97ad-81ac-0958-b1c53b86fd3a",
                        ],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-164-n-6",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".navbar-dd-content-wp.nav-6",
                        selectorGuids: [
                          "b0df0496-bc74-3332-da5c-93fa14fd6de9",
                          "44fba8e4-d116-f688-6fb8-0adbd9a0c625",
                        ],
                      },
                      value: "none",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1904aba2342,
          },
          "a-165": {
            id: "a-165",
            title: "Ham 1 Menu - Open 2",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-165-n",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".nav-overlay",
                        selectorGuids: ["4390c1b1-0303-d4e6-bf78-be7cecd1f711"],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-165-n-2",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".nav-links-dd-wp",
                        selectorGuids: ["5eb90974-7e38-5092-8268-4c9088319331"],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-165-n-3",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".nav-links-dd-wp",
                        selectorGuids: ["5eb90974-7e38-5092-8268-4c9088319331"],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-165-n-4",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".ham-line._3",
                        selectorGuids: [
                          "5eb90974-7e38-5092-8268-4c9088319336",
                          "5eb90974-7e38-5092-8268-4c908831933f",
                        ],
                      },
                      widthValue: 1.25,
                      widthUnit: "rem",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-165-n-5",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".ham-line._1",
                        selectorGuids: [
                          "5eb90974-7e38-5092-8268-4c9088319336",
                          "5eb90974-7e38-5092-8268-4c9088319340",
                        ],
                      },
                      widthValue: 1.25,
                      widthUnit: "rem",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-165-n-6",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".nav-links-dd-wp",
                        selectorGuids: ["5eb90974-7e38-5092-8268-4c9088319331"],
                      },
                      value: "flex",
                    },
                  },
                  {
                    id: "a-165-n-7",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".nav-overlay",
                        selectorGuids: ["4390c1b1-0303-d4e6-bf78-be7cecd1f711"],
                      },
                      value: "block",
                    },
                  },
                  {
                    id: "a-165-n-8",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".nav-links-wp",
                        selectorGuids: ["acd2c6a7-482f-7bc5-49ee-af7752a2b17e"],
                      },
                      value: "flex",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-165-n-9",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".ham-line._1",
                        selectorGuids: [
                          "5eb90974-7e38-5092-8268-4c9088319336",
                          "5eb90974-7e38-5092-8268-4c9088319340",
                        ],
                      },
                      zValue: -45,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-165-n-10",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".ham-line._3",
                        selectorGuids: [
                          "5eb90974-7e38-5092-8268-4c9088319336",
                          "5eb90974-7e38-5092-8268-4c908831933f",
                        ],
                      },
                      zValue: 45,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-165-n-11",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        selector: ".nav-links-dd-wp",
                        selectorGuids: ["5eb90974-7e38-5092-8268-4c9088319331"],
                      },
                      widthUnit: "PX",
                      heightUnit: "AUTO",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-165-n-12",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".ham-line._3",
                        selectorGuids: [
                          "5eb90974-7e38-5092-8268-4c9088319336",
                          "5eb90974-7e38-5092-8268-4c908831933f",
                        ],
                      },
                      widthValue: 1.5625,
                      widthUnit: "rem",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-165-n-13",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".ham-line._1",
                        selectorGuids: [
                          "5eb90974-7e38-5092-8268-4c9088319336",
                          "5eb90974-7e38-5092-8268-4c9088319340",
                        ],
                      },
                      widthValue: 1.5625,
                      widthUnit: "rem",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-165-n-14",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".ham-line._3",
                        selectorGuids: [
                          "5eb90974-7e38-5092-8268-4c9088319336",
                          "5eb90974-7e38-5092-8268-4c908831933f",
                        ],
                      },
                      xValue: -0.09375,
                      yValue: -0.1875,
                      xUnit: "rem",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-165-n-15",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".ham-line._1",
                        selectorGuids: [
                          "5eb90974-7e38-5092-8268-4c9088319336",
                          "5eb90974-7e38-5092-8268-4c9088319340",
                        ],
                      },
                      xValue: 0.125,
                      yValue: 0.1875,
                      xUnit: "rem",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18ee5e6d1a4,
          },
          "a-166": {
            id: "a-166",
            title: "Ham 1 Menu - Close 2",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-166-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        selector: ".nav-links-dd-wp",
                        selectorGuids: ["5eb90974-7e38-5092-8268-4c9088319331"],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-166-n-2",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        selector: ".ham-line._1",
                        selectorGuids: [
                          "5eb90974-7e38-5092-8268-4c9088319336",
                          "5eb90974-7e38-5092-8268-4c9088319340",
                        ],
                      },
                      widthValue: 1.25,
                      widthUnit: "rem",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-166-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        selector: ".ham-line._1",
                        selectorGuids: [
                          "5eb90974-7e38-5092-8268-4c9088319336",
                          "5eb90974-7e38-5092-8268-4c9088319340",
                        ],
                      },
                      xValue: 0,
                      yValue: 0,
                      xUnit: "rem",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-166-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        selector: ".ham-line._3",
                        selectorGuids: [
                          "5eb90974-7e38-5092-8268-4c9088319336",
                          "5eb90974-7e38-5092-8268-4c908831933f",
                        ],
                      },
                      xValue: 0,
                      yValue: 0,
                      xUnit: "rem",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-166-n-5",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        selector: ".ham-line._3",
                        selectorGuids: [
                          "5eb90974-7e38-5092-8268-4c9088319336",
                          "5eb90974-7e38-5092-8268-4c908831933f",
                        ],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-166-n-6",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        selector: ".ham-line._1",
                        selectorGuids: [
                          "5eb90974-7e38-5092-8268-4c9088319336",
                          "5eb90974-7e38-5092-8268-4c9088319340",
                        ],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-166-n-7",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".nav-overlay",
                        selectorGuids: ["4390c1b1-0303-d4e6-bf78-be7cecd1f711"],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-166-n-8",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        selector: ".ham-line._3",
                        selectorGuids: [
                          "5eb90974-7e38-5092-8268-4c9088319336",
                          "5eb90974-7e38-5092-8268-4c908831933f",
                        ],
                      },
                      widthValue: 1.25,
                      widthUnit: "rem",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-166-n-9",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".nav-links-dd-wp",
                        selectorGuids: ["5eb90974-7e38-5092-8268-4c9088319331"],
                      },
                      value: "none",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18ee5e6d1a4,
          },
          "a-167": {
            id: "a-167",
            title: "Mobile Submenu open 2",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-167-n",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".nav-dd-wp",
                        selectorGuids: ["a0cae272-7b7c-8a52-9bb9-216ade5d04e4"],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-167-n-2",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "PARENT",
                        selector: ".nav-links-wp",
                        selectorGuids: ["acd2c6a7-482f-7bc5-49ee-af7752a2b17e"],
                      },
                      widthUnit: "PX",
                      heightUnit: "AUTO",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-167-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "PARENT",
                        selector: ".nav-links-wp",
                        selectorGuids: ["acd2c6a7-482f-7bc5-49ee-af7752a2b17e"],
                      },
                      xValue: 0,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-167-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".nav-dd-wp",
                        selectorGuids: ["a0cae272-7b7c-8a52-9bb9-216ade5d04e4"],
                      },
                      xValue: 0,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-167-n-5",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".nav-dd-wp",
                        selectorGuids: ["a0cae272-7b7c-8a52-9bb9-216ade5d04e4"],
                      },
                      value: "flex",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-167-n-6",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuint",
                      duration: 750,
                      target: {
                        selector: ".nav-dd-wp",
                        selectorGuids: ["a0cae272-7b7c-8a52-9bb9-216ade5d04e4"],
                      },
                      xValue: -110,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-167-n-7",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuint",
                      duration: 750,
                      target: {
                        useEventTarget: "PARENT",
                        selector: ".nav-links-wp",
                        selectorGuids: ["acd2c6a7-482f-7bc5-49ee-af7752a2b17e"],
                      },
                      xValue: -110,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-167-n-8",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 50,
                      target: {
                        useEventTarget: "PARENT",
                        selector: ".nav-links-wp",
                        selectorGuids: ["acd2c6a7-482f-7bc5-49ee-af7752a2b17e"],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1904a985bdf,
          },
          "a-168": {
            id: "a-168",
            title: "Mobile Submenu close 2",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-168-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 50,
                      target: {
                        selector: ".nav-links-wp",
                        selectorGuids: ["acd2c6a7-482f-7bc5-49ee-af7752a2b17e"],
                      },
                      widthUnit: "PX",
                      heightUnit: "AUTO",
                      locked: !1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-168-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuint",
                      duration: 750,
                      target: {
                        selector: ".nav-dd-wp",
                        selectorGuids: ["a0cae272-7b7c-8a52-9bb9-216ade5d04e4"],
                      },
                      xValue: 0,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-168-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuint",
                      duration: 750,
                      target: {
                        selector: ".nav-links-wp",
                        selectorGuids: ["acd2c6a7-482f-7bc5-49ee-af7752a2b17e"],
                      },
                      xValue: 0,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-168-n-4",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".nav-dd-wp",
                        selectorGuids: ["a0cae272-7b7c-8a52-9bb9-216ade5d04e4"],
                      },
                      value: "none",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1904a985bdf,
          },
          "a-169": {
            id: "a-169",
            title: "nav-menu",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-169-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 300,
                      target: {},
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-169-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      yValue: -4,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-169-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      yValue: -4,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-169-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 0,
                      target: {},
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x194a8e2361b,
          },
          "a-170": {
            id: "a-170",
            title: "nav-menu 2",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-170-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 0,
                      target: {},
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x194a8e2361b,
          },
          "a-184": {
            id: "a-184",
            title: "Ham - Close",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-184-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 550,
                      target: {
                        selector: ".nav-2-links-dd-block",
                        selectorGuids: ["31e8d76f-84aa-1782-ee5f-8fb01f456a5c"],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-184-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 550,
                      target: {
                        selector: ".ham-line-1",
                        selectorGuids: ["31e8d76f-84aa-1782-ee5f-8fb01f456a57"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-184-n-3",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 550,
                      target: {
                        selector: ".ham-line-2",
                        selectorGuids: ["31e8d76f-84aa-1782-ee5f-8fb01f456a68"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-184-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 550,
                      target: {
                        selector: ".ham-line-1",
                        selectorGuids: ["31e8d76f-84aa-1782-ee5f-8fb01f456a57"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-184-n-5",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".nav-2-links-block",
                        selectorGuids: ["31e8d76f-84aa-1782-ee5f-8fb01f456a6a"],
                      },
                      value: "none",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x194b2237475,
          },
          "a-173": {
            id: "a-173",
            title: "MOB - Open Sublinks",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-173-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".nav-2-dd-mob-sublinks-wp",
                        selectorGuids: ["31e8d76f-84aa-1782-ee5f-8fb01f456a51"],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-173-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav-link-arrow",
                        selectorGuids: ["31e8d76f-84aa-1782-ee5f-8fb01f456a5e"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-173-n-3",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 750,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".nav-2-dd-mob-sublinks-wp",
                        selectorGuids: ["31e8d76f-84aa-1782-ee5f-8fb01f456a51"],
                      },
                      widthUnit: "PX",
                      heightUnit: "AUTO",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-173-n-4",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 550,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav-link-arrow",
                        selectorGuids: ["31e8d76f-84aa-1782-ee5f-8fb01f456a5e"],
                      },
                      zValue: 180,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x192b03b37d0,
          },
          "a-177": {
            id: "a-177",
            title: "Mobile Submenu close 3",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-177-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 50,
                      target: {
                        selector: ".nav-2-links-block",
                        selectorGuids: ["31e8d76f-84aa-1782-ee5f-8fb01f456a6a"],
                      },
                      widthUnit: "PX",
                      heightUnit: "AUTO",
                      locked: !1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-177-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuint",
                      duration: 750,
                      target: {
                        selector: ".nav-2-dd-block",
                        selectorGuids: ["31e8d76f-84aa-1782-ee5f-8fb01f456a5d"],
                      },
                      xValue: 0,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-177-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuint",
                      duration: 750,
                      target: {
                        selector: ".nav-2-links-block",
                        selectorGuids: ["31e8d76f-84aa-1782-ee5f-8fb01f456a6a"],
                      },
                      xValue: 0,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-177-n-4",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".nav-2-dd-block",
                        selectorGuids: ["31e8d76f-84aa-1782-ee5f-8fb01f456a5d"],
                      },
                      value: "none",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1904a985bdf,
          },
          "a-179": {
            id: "a-179",
            title: "FW Megamenu Close",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-179-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 300,
                      target: {
                        selector: ".nav-2-dd-content-wp",
                        selectorGuids: ["31e8d76f-84aa-1782-ee5f-8fb01f456a54"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-179-n-2",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 150,
                      easing: "outCubic",
                      duration: 300,
                      target: {
                        selector: ".nav-2-dd-block",
                        selectorGuids: ["31e8d76f-84aa-1782-ee5f-8fb01f456a5d"],
                      },
                      widthValue: 100,
                      heightValue: 0,
                      widthUnit: "%",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-179-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 150,
                      easing: "outQuint",
                      duration: 300,
                      target: {
                        selector: ".nav-2-bg-overlay",
                        selectorGuids: ["31e8d76f-84aa-1782-ee5f-8fb01f456a6c"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-179-n-4",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 300,
                      easing: "outQuad",
                      duration: 300,
                      target: {
                        selector: ".navbar-full-width",
                        selectorGuids: ["31e8d76f-84aa-1782-ee5f-8fb01f456a67"],
                      },
                      globalSwatchId: "",
                      rValue: 255,
                      bValue: 255,
                      gValue: 255,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-179-n-5",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 450,
                      easing: "outCubic",
                      duration: 0,
                      target: {
                        selector: ".nav-2-bg-overlay",
                        selectorGuids: ["31e8d76f-84aa-1782-ee5f-8fb01f456a6c"],
                      },
                      value: "none",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1904a985bdf,
          },
          "a-183": {
            id: "a-183",
            title: "FW Megamenu Desktop Open",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-183-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".nav-2-dd-block",
                        selectorGuids: ["31e8d76f-84aa-1782-ee5f-8fb01f456a5d"],
                      },
                      widthValue: 100,
                      heightValue: 0,
                      widthUnit: "%",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-183-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav-link-arrow",
                        selectorGuids: ["31e8d76f-84aa-1782-ee5f-8fb01f456a5e"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-183-n-3",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".navbar-full-width",
                        selectorGuids: ["31e8d76f-84aa-1782-ee5f-8fb01f456a67"],
                      },
                      globalSwatchId: "",
                      rValue: 255,
                      bValue: 255,
                      gValue: 255,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-183-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".nav-2-dd-content-wp",
                        selectorGuids: ["31e8d76f-84aa-1782-ee5f-8fb01f456a54"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-183-n-5",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".nav-2-bg-overlay",
                        selectorGuids: ["31e8d76f-84aa-1782-ee5f-8fb01f456a6c"],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-183-n-6",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".nav-2-bg-overlay",
                        selectorGuids: ["31e8d76f-84aa-1782-ee5f-8fb01f456a6c"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-183-n-7",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".nav-2-dd-block",
                        selectorGuids: ["31e8d76f-84aa-1782-ee5f-8fb01f456a5d"],
                      },
                      value: "none",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-183-n-8",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".nav-2-dd-block",
                        selectorGuids: ["31e8d76f-84aa-1782-ee5f-8fb01f456a5d"],
                      },
                      value: "flex",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-183-n-9",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        selector: ".nav-2-dd-block",
                        selectorGuids: ["31e8d76f-84aa-1782-ee5f-8fb01f456a5d"],
                      },
                      widthValue: 100,
                      widthUnit: "%",
                      heightUnit: "AUTO",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-183-n-10",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 350,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav-link-arrow",
                        selectorGuids: ["31e8d76f-84aa-1782-ee5f-8fb01f456a5e"],
                      },
                      zValue: 180,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-183-n-11",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 500,
                      target: {
                        selector: ".nav-2-bg-overlay",
                        selectorGuids: ["31e8d76f-84aa-1782-ee5f-8fb01f456a6c"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-183-n-12",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".nav-2-bg-overlay",
                        selectorGuids: ["31e8d76f-84aa-1782-ee5f-8fb01f456a6c"],
                      },
                      value: "block",
                    },
                  },
                  {
                    id: "a-183-n-13",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 0,
                      target: {
                        selector: ".navbar-full-width",
                        selectorGuids: ["31e8d76f-84aa-1782-ee5f-8fb01f456a67"],
                      },
                      globalSwatchId: "",
                      rValue: 255,
                      bValue: 255,
                      gValue: 255,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-183-n-14",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 250,
                      easing: "outCubic",
                      duration: 500,
                      target: {
                        selector: ".nav-2-dd-content-wp",
                        selectorGuids: ["31e8d76f-84aa-1782-ee5f-8fb01f456a54"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1904a985bdf,
          },
          "a-174": {
            id: "a-174",
            title: "FW MM Nav-3",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-174-n",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".nav-2-dd-content-wp.nav-1",
                        selectorGuids: [
                          "31e8d76f-84aa-1782-ee5f-8fb01f456a54",
                          "31e8d76f-84aa-1782-ee5f-8fb01f456a7e",
                        ],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-174-n-2",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".nav-2-dd-content-wp.nav-2",
                        selectorGuids: [
                          "31e8d76f-84aa-1782-ee5f-8fb01f456a54",
                          "31e8d76f-84aa-1782-ee5f-8fb01f456a7a",
                        ],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-174-n-3",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".nav-2-dd-content-wp.nav-3",
                        selectorGuids: [
                          "31e8d76f-84aa-1782-ee5f-8fb01f456a54",
                          "31e8d76f-84aa-1782-ee5f-8fb01f456a7c",
                        ],
                      },
                      value: "flex",
                    },
                  },
                  {
                    id: "a-174-n-4",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".nav-2-dd-content-wp.nav-4",
                        selectorGuids: [
                          "31e8d76f-84aa-1782-ee5f-8fb01f456a54",
                          "31e8d76f-84aa-1782-ee5f-8fb01f456a84",
                        ],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-174-n-5",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".nav-2-dd-content-wp.nav-5",
                        selectorGuids: [
                          "31e8d76f-84aa-1782-ee5f-8fb01f456a54",
                          "31e8d76f-84aa-1782-ee5f-8fb01f456a80",
                        ],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-174-n-6",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".nav-2-dd-content-wp.nav-6",
                        selectorGuids: [
                          "31e8d76f-84aa-1782-ee5f-8fb01f456a54",
                          "31e8d76f-84aa-1782-ee5f-8fb01f456a88",
                        ],
                      },
                      value: "none",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1904aba2342,
          },
          "a-175": {
            id: "a-175",
            title: "FW MM - Hover out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-175-n",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 350,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav-link-arrow",
                        selectorGuids: ["31e8d76f-84aa-1782-ee5f-8fb01f456a5e"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x194b1d05f46,
          },
          "a-180": {
            id: "a-180",
            title: "FW MM Nav-5",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-180-n",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".nav-2-dd-content-wp.nav-1",
                        selectorGuids: [
                          "31e8d76f-84aa-1782-ee5f-8fb01f456a54",
                          "31e8d76f-84aa-1782-ee5f-8fb01f456a7e",
                        ],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-180-n-2",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".nav-2-dd-content-wp.nav-2",
                        selectorGuids: [
                          "31e8d76f-84aa-1782-ee5f-8fb01f456a54",
                          "31e8d76f-84aa-1782-ee5f-8fb01f456a7a",
                        ],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-180-n-3",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".nav-2-dd-content-wp.nav-3",
                        selectorGuids: [
                          "31e8d76f-84aa-1782-ee5f-8fb01f456a54",
                          "31e8d76f-84aa-1782-ee5f-8fb01f456a7c",
                        ],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-180-n-4",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".nav-2-dd-content-wp.nav-4",
                        selectorGuids: [
                          "31e8d76f-84aa-1782-ee5f-8fb01f456a54",
                          "31e8d76f-84aa-1782-ee5f-8fb01f456a84",
                        ],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-180-n-5",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".nav-2-dd-content-wp.nav-5",
                        selectorGuids: [
                          "31e8d76f-84aa-1782-ee5f-8fb01f456a54",
                          "31e8d76f-84aa-1782-ee5f-8fb01f456a80",
                        ],
                      },
                      value: "flex",
                    },
                  },
                  {
                    id: "a-180-n-6",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".nav-2-dd-content-wp.nav-6",
                        selectorGuids: [
                          "31e8d76f-84aa-1782-ee5f-8fb01f456a54",
                          "31e8d76f-84aa-1782-ee5f-8fb01f456a88",
                        ],
                      },
                      value: "none",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1904aba2342,
          },
          "a-176": {
            id: "a-176",
            title: "FW MM Nav-4",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-176-n",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".nav-2-dd-content-wp.nav-1",
                        selectorGuids: [
                          "31e8d76f-84aa-1782-ee5f-8fb01f456a54",
                          "31e8d76f-84aa-1782-ee5f-8fb01f456a7e",
                        ],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-176-n-2",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".nav-2-dd-content-wp.nav-2",
                        selectorGuids: [
                          "31e8d76f-84aa-1782-ee5f-8fb01f456a54",
                          "31e8d76f-84aa-1782-ee5f-8fb01f456a7a",
                        ],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-176-n-3",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".nav-2-dd-content-wp.nav-3",
                        selectorGuids: [
                          "31e8d76f-84aa-1782-ee5f-8fb01f456a54",
                          "31e8d76f-84aa-1782-ee5f-8fb01f456a7c",
                        ],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-176-n-4",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".nav-2-dd-content-wp.nav-4",
                        selectorGuids: [
                          "31e8d76f-84aa-1782-ee5f-8fb01f456a54",
                          "31e8d76f-84aa-1782-ee5f-8fb01f456a84",
                        ],
                      },
                      value: "flex",
                    },
                  },
                  {
                    id: "a-176-n-5",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".nav-2-dd-content-wp.nav-5",
                        selectorGuids: [
                          "31e8d76f-84aa-1782-ee5f-8fb01f456a54",
                          "31e8d76f-84aa-1782-ee5f-8fb01f456a80",
                        ],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-176-n-6",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".nav-2-dd-content-wp.nav-6",
                        selectorGuids: [
                          "31e8d76f-84aa-1782-ee5f-8fb01f456a54",
                          "31e8d76f-84aa-1782-ee5f-8fb01f456a88",
                        ],
                      },
                      value: "none",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1904aba2342,
          },
          "a-178": {
            id: "a-178",
            title: "FW MM Nav-1",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-178-n",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".nav-2-dd-content-wp.nav-1",
                        selectorGuids: [
                          "31e8d76f-84aa-1782-ee5f-8fb01f456a54",
                          "31e8d76f-84aa-1782-ee5f-8fb01f456a7e",
                        ],
                      },
                      value: "flex",
                    },
                  },
                  {
                    id: "a-178-n-2",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".nav-2-dd-content-wp.nav-2",
                        selectorGuids: [
                          "31e8d76f-84aa-1782-ee5f-8fb01f456a54",
                          "31e8d76f-84aa-1782-ee5f-8fb01f456a7a",
                        ],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-178-n-3",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".nav-2-dd-content-wp.nav-3",
                        selectorGuids: [
                          "31e8d76f-84aa-1782-ee5f-8fb01f456a54",
                          "31e8d76f-84aa-1782-ee5f-8fb01f456a7c",
                        ],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-178-n-4",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".nav-2-dd-content-wp.nav-4",
                        selectorGuids: [
                          "31e8d76f-84aa-1782-ee5f-8fb01f456a54",
                          "31e8d76f-84aa-1782-ee5f-8fb01f456a84",
                        ],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-178-n-5",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".nav-2-dd-content-wp.nav-5",
                        selectorGuids: [
                          "31e8d76f-84aa-1782-ee5f-8fb01f456a54",
                          "31e8d76f-84aa-1782-ee5f-8fb01f456a80",
                        ],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-178-n-6",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".nav-2-dd-content-wp.nav-6",
                        selectorGuids: [
                          "31e8d76f-84aa-1782-ee5f-8fb01f456a54",
                          "31e8d76f-84aa-1782-ee5f-8fb01f456a88",
                        ],
                      },
                      value: "none",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1904aba2342,
          },
          "a-181": {
            id: "a-181",
            title: "FW MM Nav-6",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-181-n",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".nav-2-dd-content-wp.nav-1",
                        selectorGuids: [
                          "31e8d76f-84aa-1782-ee5f-8fb01f456a54",
                          "31e8d76f-84aa-1782-ee5f-8fb01f456a7e",
                        ],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-181-n-2",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".nav-2-dd-content-wp.nav-2",
                        selectorGuids: [
                          "31e8d76f-84aa-1782-ee5f-8fb01f456a54",
                          "31e8d76f-84aa-1782-ee5f-8fb01f456a7a",
                        ],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-181-n-3",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".nav-2-dd-content-wp.nav-3",
                        selectorGuids: [
                          "31e8d76f-84aa-1782-ee5f-8fb01f456a54",
                          "31e8d76f-84aa-1782-ee5f-8fb01f456a7c",
                        ],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-181-n-4",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".nav-2-dd-content-wp.nav-4",
                        selectorGuids: [
                          "31e8d76f-84aa-1782-ee5f-8fb01f456a54",
                          "31e8d76f-84aa-1782-ee5f-8fb01f456a84",
                        ],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-181-n-5",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".nav-2-dd-content-wp.nav-5",
                        selectorGuids: [
                          "31e8d76f-84aa-1782-ee5f-8fb01f456a54",
                          "31e8d76f-84aa-1782-ee5f-8fb01f456a80",
                        ],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-181-n-6",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".nav-2-dd-content-wp.nav-6",
                        selectorGuids: [
                          "31e8d76f-84aa-1782-ee5f-8fb01f456a54",
                          "31e8d76f-84aa-1782-ee5f-8fb01f456a88",
                        ],
                      },
                      value: "flex",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1904aba2342,
          },
          "a-172": {
            id: "a-172",
            title: "Ham - Open",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-172-n",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".nav-2-links-block",
                        selectorGuids: ["31e8d76f-84aa-1782-ee5f-8fb01f456a6a"],
                      },
                      value: "flex",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-172-n-2",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 550,
                      target: {
                        selector: ".nav-2-links-dd-block",
                        selectorGuids: ["31e8d76f-84aa-1782-ee5f-8fb01f456a5c"],
                      },
                      widthUnit: "PX",
                      heightUnit: "AUTO",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-172-n-3",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 550,
                      target: {
                        selector: ".ham-line-1",
                        selectorGuids: ["31e8d76f-84aa-1782-ee5f-8fb01f456a57"],
                      },
                      zValue: 45,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-172-n-4",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 550,
                      target: {
                        selector: ".ham-line-2",
                        selectorGuids: ["31e8d76f-84aa-1782-ee5f-8fb01f456a68"],
                      },
                      zValue: -45,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-172-n-5",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 550,
                      target: {
                        selector: ".ham-line-1",
                        selectorGuids: ["31e8d76f-84aa-1782-ee5f-8fb01f456a57"],
                      },
                      yValue: 10,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x194b2237475,
          },
          "a-182": {
            id: "a-182",
            title: "MOB - Close Sublinks",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-182-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 750,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".nav-2-dd-mob-sublinks-wp",
                        selectorGuids: ["31e8d76f-84aa-1782-ee5f-8fb01f456a51"],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-182-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 550,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav-link-arrow",
                        selectorGuids: ["31e8d76f-84aa-1782-ee5f-8fb01f456a5e"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x192b03b37d0,
          },
          "a-171": {
            id: "a-171",
            title: "FW MM Nav-2",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-171-n",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".nav-2-dd-content-wp.nav-1",
                        selectorGuids: [
                          "31e8d76f-84aa-1782-ee5f-8fb01f456a54",
                          "31e8d76f-84aa-1782-ee5f-8fb01f456a7e",
                        ],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-171-n-2",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".nav-2-dd-content-wp.nav-2",
                        selectorGuids: [
                          "31e8d76f-84aa-1782-ee5f-8fb01f456a54",
                          "31e8d76f-84aa-1782-ee5f-8fb01f456a7a",
                        ],
                      },
                      value: "flex",
                    },
                  },
                  {
                    id: "a-171-n-3",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".nav-2-dd-content-wp.nav-3",
                        selectorGuids: [
                          "31e8d76f-84aa-1782-ee5f-8fb01f456a54",
                          "31e8d76f-84aa-1782-ee5f-8fb01f456a7c",
                        ],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-171-n-4",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".nav-2-dd-content-wp.nav-4",
                        selectorGuids: [
                          "31e8d76f-84aa-1782-ee5f-8fb01f456a54",
                          "31e8d76f-84aa-1782-ee5f-8fb01f456a84",
                        ],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-171-n-5",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".nav-2-dd-content-wp.nav-5",
                        selectorGuids: [
                          "31e8d76f-84aa-1782-ee5f-8fb01f456a54",
                          "31e8d76f-84aa-1782-ee5f-8fb01f456a80",
                        ],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-171-n-6",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".nav-2-dd-content-wp.nav-6",
                        selectorGuids: [
                          "31e8d76f-84aa-1782-ee5f-8fb01f456a54",
                          "31e8d76f-84aa-1782-ee5f-8fb01f456a88",
                        ],
                      },
                      value: "none",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1904aba2342,
          },
          "a-188": {
            id: "a-188",
            title: "FW MM Desktop Open  (Text clr change)",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-188-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".nav-2-dd-block",
                        selectorGuids: ["31e8d76f-84aa-1782-ee5f-8fb01f456a5d"],
                      },
                      widthValue: 100,
                      heightValue: 0,
                      widthUnit: "%",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-188-n-17",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".nav-link-arrow",
                        selectorGuids: ["31e8d76f-84aa-1782-ee5f-8fb01f456a5e"],
                      },
                      filters: [
                        {
                          type: "invert",
                          filterId: "b880",
                          value: 100,
                          unit: "%",
                        },
                      ],
                    },
                  },
                  {
                    id: "a-188-n-15",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".nav-link-text",
                        selectorGuids: ["31e8d76f-84aa-1782-ee5f-8fb01f456a4e"],
                      },
                      globalSwatchId: "",
                      rValue: 0,
                      bValue: 0,
                      gValue: 0,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-188-n-3",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".navbar-full-width",
                        selectorGuids: ["31e8d76f-84aa-1782-ee5f-8fb01f456a67"],
                      },
                      globalSwatchId: "",
                      rValue: 255,
                      bValue: 255,
                      gValue: 255,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-188-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".nav-2-dd-content-wp",
                        selectorGuids: ["31e8d76f-84aa-1782-ee5f-8fb01f456a54"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-188-n-5",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".nav-2-bg-overlay",
                        selectorGuids: ["31e8d76f-84aa-1782-ee5f-8fb01f456a6c"],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-188-n-6",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".nav-2-bg-overlay",
                        selectorGuids: ["31e8d76f-84aa-1782-ee5f-8fb01f456a6c"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-188-n-7",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".nav-2-dd-block",
                        selectorGuids: ["31e8d76f-84aa-1782-ee5f-8fb01f456a5d"],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-188-n-19",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav-link-arrow",
                        selectorGuids: ["31e8d76f-84aa-1782-ee5f-8fb01f456a5e"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-188-n-8",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".nav-2-dd-block",
                        selectorGuids: ["31e8d76f-84aa-1782-ee5f-8fb01f456a5d"],
                      },
                      value: "flex",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-188-n-9",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        selector: ".nav-2-dd-block",
                        selectorGuids: ["31e8d76f-84aa-1782-ee5f-8fb01f456a5d"],
                      },
                      widthValue: 100,
                      widthUnit: "%",
                      heightUnit: "AUTO",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-188-n-11",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 500,
                      target: {
                        selector: ".nav-2-bg-overlay",
                        selectorGuids: ["31e8d76f-84aa-1782-ee5f-8fb01f456a6c"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-188-n-12",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".nav-2-bg-overlay",
                        selectorGuids: ["31e8d76f-84aa-1782-ee5f-8fb01f456a6c"],
                      },
                      value: "block",
                    },
                  },
                  {
                    id: "a-188-n-13",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 0,
                      target: {
                        selector: ".navbar-full-width",
                        selectorGuids: ["31e8d76f-84aa-1782-ee5f-8fb01f456a67"],
                      },
                      globalSwatchId: "",
                      rValue: 0,
                      bValue: 0,
                      gValue: 0,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-188-n-16",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 350,
                      target: {
                        selector: ".nav-link-text",
                        selectorGuids: ["31e8d76f-84aa-1782-ee5f-8fb01f456a4e"],
                      },
                      globalSwatchId: "",
                      rValue: 255,
                      bValue: 255,
                      gValue: 255,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-188-n-18",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 350,
                      target: {
                        selector: ".nav-link-arrow",
                        selectorGuids: ["31e8d76f-84aa-1782-ee5f-8fb01f456a5e"],
                      },
                      filters: [
                        {
                          type: "invert",
                          filterId: "b880",
                          value: 0,
                          unit: "%",
                        },
                      ],
                    },
                  },
                  {
                    id: "a-188-n-20",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav-link-arrow",
                        selectorGuids: ["31e8d76f-84aa-1782-ee5f-8fb01f456a5e"],
                      },
                      zValue: 180,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-188-n-14",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 250,
                      easing: "outCubic",
                      duration: 500,
                      target: {
                        selector: ".nav-2-dd-content-wp",
                        selectorGuids: ["31e8d76f-84aa-1782-ee5f-8fb01f456a54"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1904a985bdf,
          },
          "a-189": {
            id: "a-189",
            title: "FW MM Desktop - Close(Text clr change)",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-189-n-5",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 200,
                      target: {
                        selector: ".nav-2-dd-content-wp",
                        selectorGuids: ["31e8d76f-84aa-1782-ee5f-8fb01f456a54"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-189-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 450,
                      target: {
                        selector: ".nav-2-dd-block",
                        selectorGuids: ["31e8d76f-84aa-1782-ee5f-8fb01f456a5d"],
                      },
                      widthValue: 100,
                      heightValue: 0,
                      widthUnit: "%",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-189-n-8",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 450,
                      easing: "outQuad",
                      duration: 0,
                      target: {
                        selector: ".nav-2-dd-block",
                        selectorGuids: ["31e8d76f-84aa-1782-ee5f-8fb01f456a5d"],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-189-n-2",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 450,
                      easing: "outQuad",
                      duration: 0,
                      target: {
                        selector: ".nav-link-arrow",
                        selectorGuids: ["31e8d76f-84aa-1782-ee5f-8fb01f456a5e"],
                      },
                      filters: [
                        {
                          type: "invert",
                          filterId: "b880",
                          value: 100,
                          unit: "%",
                        },
                      ],
                    },
                  },
                  {
                    id: "a-189-n-3",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 450,
                      easing: "outQuad",
                      duration: 0,
                      target: {
                        selector: ".nav-link-text",
                        selectorGuids: ["31e8d76f-84aa-1782-ee5f-8fb01f456a4e"],
                      },
                      globalSwatchId: "",
                      rValue: 0,
                      bValue: 0,
                      gValue: 0,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-189-n-4",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 450,
                      easing: "outQuad",
                      duration: 0,
                      target: {
                        selector: ".navbar-full-width",
                        selectorGuids: ["31e8d76f-84aa-1782-ee5f-8fb01f456a67"],
                      },
                      globalSwatchId: "",
                      rValue: 255,
                      bValue: 255,
                      gValue: 255,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-189-n-6",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 450,
                      easing: "outQuad",
                      duration: 0,
                      target: {
                        selector: ".nav-2-bg-overlay",
                        selectorGuids: ["31e8d76f-84aa-1782-ee5f-8fb01f456a6c"],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-189-n-7",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 450,
                      easing: "outQuad",
                      duration: 0,
                      target: {
                        selector: ".nav-2-bg-overlay",
                        selectorGuids: ["31e8d76f-84aa-1782-ee5f-8fb01f456a6c"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1904a985bdf,
          },
          "a-192": {
            id: "a-192",
            title: "Faq 2 - Open",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-192-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".faq-answer-wp",
                        selectorGuids: ["056292b3-f217-4ac0-27e1-6f17d39537ac"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-192-n-2",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".faq-answer-wp",
                        selectorGuids: ["056292b3-f217-4ac0-27e1-6f17d39537ac"],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-192-n-5",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".faq-icon",
                        selectorGuids: ["056292b3-f217-4ac0-27e1-6f17d39537ab"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-192-n-3",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".faq-answer-wp",
                        selectorGuids: ["056292b3-f217-4ac0-27e1-6f17d39537ac"],
                      },
                      value: "flex",
                    },
                  },
                  {
                    id: "a-192-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 450,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".faq-answer-wp",
                        selectorGuids: ["056292b3-f217-4ac0-27e1-6f17d39537ac"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-192-n-6",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".faq-icon",
                        selectorGuids: ["056292b3-f217-4ac0-27e1-6f17d39537ab"],
                      },
                      zValue: 180,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x195c73f4935,
          },
          "a-193": {
            id: "a-193",
            title: "Faq 2 - Close",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-193-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 450,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".faq-answer-wp",
                        selectorGuids: ["056292b3-f217-4ac0-27e1-6f17d39537ac"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-193-n-3",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".faq-icon",
                        selectorGuids: ["056292b3-f217-4ac0-27e1-6f17d39537ab"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-193-n-2",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".faq-answer-wp",
                        selectorGuids: ["056292b3-f217-4ac0-27e1-6f17d39537ac"],
                      },
                      value: "none",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x195c73f4935,
          },
          "a-195": {
            id: "a-195",
            title: "primary btn [ hover in ] 2",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-195-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".arrow-line",
                        selectorGuids: ["5a542d98-abb4-9f33-2e59-f8d439dccde3"],
                      },
                      widthValue: 0,
                      widthUnit: "px",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-195-n-2",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".arrow-line",
                        selectorGuids: ["5a542d98-abb4-9f33-2e59-f8d439dccde3"],
                      },
                      widthValue: 12,
                      widthUnit: "px",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18f4da31667,
          },
          "a-196": {
            id: "a-196",
            title: "primary btn [ hover out ] 2",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-196-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".arrow-line",
                        selectorGuids: ["5a542d98-abb4-9f33-2e59-f8d439dccde3"],
                      },
                      widthValue: 0,
                      widthUnit: "px",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18f4da31667,
          },
          "a-198": {
            id: "a-198",
            title: "card scale",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-198-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".product-card-wp",
                        selectorGuids: ["9165e18f-b637-1a2c-6bdb-76da0a478ab8"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-198-n-13",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".blur",
                        selectorGuids: ["09eeefa1-30f0-bb1c-d6d4-917a99b11834"],
                      },
                      widthValue: 102,
                      heightValue: 30,
                      widthUnit: "%",
                      heightUnit: "%",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-198-n-11",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".product-icon",
                        selectorGuids: ["cceda216-0ff1-6f7a-d4d7-f3dc07b2f98a"],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-198-n-9",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".product-img",
                        selectorGuids: ["44432f8e-6019-29e3-d164-07981cb65501"],
                      },
                      xValue: 1.25,
                      yValue: 1.25,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-198-n-7",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".product-description",
                        selectorGuids: ["5bebe0d9-82ba-73ad-7499-cb8fa0f09e27"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-198-n-5",
                    actionTypeId: "PLUGIN_VARIABLE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      value: { unit: "rem", value: 1.5 },
                      target: {
                        objectId: "--_typography---h3-s--font-size",
                        useEventTarget: "CHILDREN",
                        selector: ".h3-s.product-head",
                        selectorGuids: [
                          "23f6ca6e-dfb5-c201-54b6-2348a03b1f8c",
                          "010a9c1b-e8cf-2f32-90ab-4d496bf76883",
                        ],
                      },
                    },
                  },
                  {
                    id: "a-198-n-3",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".product-description",
                        selectorGuids: ["5bebe0d9-82ba-73ad-7499-cb8fa0f09e27"],
                      },
                      widthValue: 100,
                      heightValue: 0,
                      widthUnit: "%",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-198-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".product-card-wp",
                        selectorGuids: ["9165e18f-b637-1a2c-6bdb-76da0a478ab8"],
                      },
                      xValue: 1.1,
                      yValue: 1.1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-198-n-14",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".blur",
                        selectorGuids: ["09eeefa1-30f0-bb1c-d6d4-917a99b11834"],
                      },
                      widthValue: 102,
                      heightValue: 70,
                      widthUnit: "%",
                      heightUnit: "%",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-198-n-12",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".product-icon",
                        selectorGuids: ["cceda216-0ff1-6f7a-d4d7-f3dc07b2f98a"],
                      },
                      value: "block",
                    },
                  },
                  {
                    id: "a-198-n-10",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".product-img",
                        selectorGuids: ["44432f8e-6019-29e3-d164-07981cb65501"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-198-n-4",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".product-description",
                        selectorGuids: ["5bebe0d9-82ba-73ad-7499-cb8fa0f09e27"],
                      },
                      widthValue: 100,
                      widthUnit: "%",
                      heightUnit: "AUTO",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-198-n-6",
                    actionTypeId: "PLUGIN_VARIABLE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      value: { size: 2, unit: "rem", value: 1.5 },
                      target: {
                        objectId: "--_typography---h3-s--font-size",
                        useEventTarget: "CHILDREN",
                        selector: ".h3-s.product-head",
                        selectorGuids: [
                          "23f6ca6e-dfb5-c201-54b6-2348a03b1f8c",
                          "010a9c1b-e8cf-2f32-90ab-4d496bf76883",
                        ],
                      },
                    },
                  },
                  {
                    id: "a-198-n-8",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 200,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".product-description",
                        selectorGuids: ["5bebe0d9-82ba-73ad-7499-cb8fa0f09e27"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x19778d3a331,
          },
          "a-199": {
            id: "a-199",
            title: "card scale out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-199-n-8",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".product-description",
                        selectorGuids: ["5bebe0d9-82ba-73ad-7499-cb8fa0f09e27"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-199-n-4",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 100,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".product-card-wp",
                        selectorGuids: ["9165e18f-b637-1a2c-6bdb-76da0a478ab8"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-199-n-10",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 100,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".blur",
                        selectorGuids: ["09eeefa1-30f0-bb1c-d6d4-917a99b11834"],
                      },
                      widthValue: 102,
                      heightValue: 30,
                      widthUnit: "%",
                      heightUnit: "%",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-199-n-9",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 100,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".product-icon",
                        selectorGuids: ["cceda216-0ff1-6f7a-d4d7-f3dc07b2f98a"],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-199-n-5",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 100,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".product-description",
                        selectorGuids: ["5bebe0d9-82ba-73ad-7499-cb8fa0f09e27"],
                      },
                      widthValue: 100,
                      heightValue: 0,
                      widthUnit: "%",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-199-n-6",
                    actionTypeId: "PLUGIN_VARIABLE",
                    config: {
                      delay: 100,
                      easing: "ease",
                      duration: 500,
                      value: { size: 1.5, unit: "rem", value: 1.5 },
                      target: {
                        objectId: "--_typography---h3-s--font-size",
                        useEventTarget: "CHILDREN",
                        selector: ".h3-s.product-head",
                        selectorGuids: [
                          "23f6ca6e-dfb5-c201-54b6-2348a03b1f8c",
                          "010a9c1b-e8cf-2f32-90ab-4d496bf76883",
                        ],
                      },
                    },
                  },
                  {
                    id: "a-199-n-7",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 100,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".product-img",
                        selectorGuids: ["44432f8e-6019-29e3-d164-07981cb65501"],
                      },
                      xValue: 1.25,
                      yValue: 1.25,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19778d3a331,
          },
          "a-202": {
            id: "a-202",
            title: "Accordion 1 - Content open",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-202-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      widthValue: 100,
                      heightValue: 0,
                      widthUnit: "%",
                      heightUnit: "rem",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-202-n-2",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {},
                      value: "none",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-202-n-3",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {},
                      value: "block",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-202-n-4",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 250,
                      target: {},
                      widthValue: 100,
                      widthUnit: "%",
                      heightUnit: "AUTO",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-202-n-5",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 250,
                      target: {},
                      zValue: 180,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1836a357c2c,
          },
          "a-203": {
            id: "a-203",
            title: "Accordion 1 - Content close",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-203-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 250,
                      target: {},
                      widthValue: 100,
                      heightValue: 0,
                      widthUnit: "%",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-203-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 250,
                      target: {},
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-203-n-3",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {},
                      value: "none",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1836a357c2c,
          },
          "a-205": {
            id: "a-205",
            title: "Modal 1 - Popup close",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-205-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 250,
                      target: {},
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-205-n-2",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {},
                      value: "none",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1836a58729d,
          },
          "a-204": {
            id: "a-204",
            title: "Modal 1 - Popup open",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-204-n",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {},
                      value: "none",
                    },
                  },
                  {
                    id: "a-204-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-204-n-3",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {},
                      value: "flex",
                    },
                  },
                  {
                    id: "a-204-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 250,
                      target: {},
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1836a58729d,
          },
          "a-201": {
            id: "a-201",
            title: "PopUp [CLOSE]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-201-n-4",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".product-popup",
                        selectorGuids: ["64a5670e-5f79-1d63-c1d1-0a3e232e871c"],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-201-n-5",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 200,
                      target: {
                        selector: ".popup",
                        selectorGuids: ["f1bf27af-71e6-3e5c-7a87-cce040cb256f"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-201-n-6",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 200,
                      target: {
                        selector: ".popup",
                        selectorGuids: ["f1bf27af-71e6-3e5c-7a87-cce040cb256f"],
                      },
                      xValue: 0.95,
                      yValue: 0.95,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19781f73ddd,
          },
          "a-206": {
            id: "a-206",
            title: "feature card comes",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-206-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".feature-card",
                        selectorGuids: ["a67d98a2-decd-9f48-843f-1e538ec8fd8d"],
                      },
                      yValue: 3,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-206-n-13",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".feature-card",
                        selectorGuids: ["a67d98a2-decd-9f48-843f-1e538ec8fd8d"],
                      },
                      filters: [
                        {
                          type: "blur",
                          filterId: "e2b4",
                          value: 2,
                          unit: "px",
                        },
                      ],
                    },
                  },
                  {
                    id: "a-206-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".feature-card",
                        selectorGuids: ["a67d98a2-decd-9f48-843f-1e538ec8fd8d"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-206-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 1e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".feature-card",
                        selectorGuids: ["a67d98a2-decd-9f48-843f-1e538ec8fd8d"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-206-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 1e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".feature-card",
                        selectorGuids: ["a67d98a2-decd-9f48-843f-1e538ec8fd8d"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-206-n-14",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".feature-card",
                        selectorGuids: ["a67d98a2-decd-9f48-843f-1e538ec8fd8d"],
                      },
                      filters: [
                        {
                          type: "blur",
                          filterId: "e2b4",
                          value: 0,
                          unit: "px",
                        },
                      ],
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x197836b3141,
          },
          "a-207": {
            id: "a-207",
            title: "Listing Comes",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-207-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        id: "684fd519993bc96a6527ef9f|f23212fe-0b19-74e0-e665-2a6315719f66",
                      },
                      yValue: 5,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-207-n-2",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".listing",
                        selectorGuids: ["b47886e4-5a6c-a3c1-0ad6-7ae6dc215359"],
                      },
                      filters: [
                        {
                          type: "blur",
                          filterId: "e2b4",
                          value: 3,
                          unit: "px",
                        },
                      ],
                    },
                  },
                  {
                    id: "a-207-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        id: "684fd519993bc96a6527ef9f|f23212fe-0b19-74e0-e665-2a6315719f66",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-207-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        id: "684fd519993bc96a6527ef9f|9224587c-7338-18c3-c7f2-b0986bd5bba6",
                      },
                      yValue: 5,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-207-n-5",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        id: "684fd519993bc96a6527ef9f|9224587c-7338-18c3-c7f2-b0986bd5bba6",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-207-n-6",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        id: "684fd519993bc96a6527ef9f|3e8b0c83-ea35-bad0-ee93-8c922693032c",
                      },
                      yValue: 5,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-207-n-7",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        id: "684fd519993bc96a6527ef9f|3e8b0c83-ea35-bad0-ee93-8c922693032c",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-207-n-8",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 1e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        id: "684fd519993bc96a6527ef9f|f23212fe-0b19-74e0-e665-2a6315719f66",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-207-n-9",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 1e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        id: "684fd519993bc96a6527ef9f|f23212fe-0b19-74e0-e665-2a6315719f66",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-207-n-10",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".listing",
                        selectorGuids: ["b47886e4-5a6c-a3c1-0ad6-7ae6dc215359"],
                      },
                      filters: [
                        {
                          type: "blur",
                          filterId: "e2b4",
                          value: 0,
                          unit: "px",
                        },
                      ],
                    },
                  },
                  {
                    id: "a-207-n-11",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 200,
                      easing: "ease",
                      duration: 1e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        id: "684fd519993bc96a6527ef9f|9224587c-7338-18c3-c7f2-b0986bd5bba6",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-207-n-12",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 200,
                      easing: "ease",
                      duration: 1e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        id: "684fd519993bc96a6527ef9f|9224587c-7338-18c3-c7f2-b0986bd5bba6",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-207-n-13",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 400,
                      easing: "ease",
                      duration: 1e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        id: "684fd519993bc96a6527ef9f|3e8b0c83-ea35-bad0-ee93-8c922693032c",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-207-n-14",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 400,
                      easing: "ease",
                      duration: 1e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        id: "684fd519993bc96a6527ef9f|3e8b0c83-ea35-bad0-ee93-8c922693032c",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x197836b3141,
          },
          "a-211": {
            id: "a-211",
            title: "add-popup",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-211-n",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".pop-up.add",
                        selectorGuids: [
                          "1e7f74bb-25e6-b86e-6311-64797ba92b8f",
                          "1e7f74bb-25e6-b86e-6311-64797ba92b99",
                        ],
                      },
                      value: "none",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-211-n-2",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".pop-up.add",
                        selectorGuids: [
                          "1e7f74bb-25e6-b86e-6311-64797ba92b8f",
                          "1e7f74bb-25e6-b86e-6311-64797ba92b99",
                        ],
                      },
                      value: "flex",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x197631a3377,
          },
          "a-212": {
            id: "a-212",
            title: "popupclose",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-212-n",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".pop-up",
                        selectorGuids: ["1e7f74bb-25e6-b86e-6311-64797ba92b8f"],
                      },
                      value: "none",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x197631a3377,
          },
          "a-210": {
            id: "a-210",
            title: "edit popup",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-210-n",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".pop-up.edit",
                        selectorGuids: [
                          "1e7f74bb-25e6-b86e-6311-64797ba92b8f",
                          "1e7f74bb-25e6-b86e-6311-64797ba92b9a",
                        ],
                      },
                      value: "none",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-210-n-2",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".pop-up.edit",
                        selectorGuids: [
                          "1e7f74bb-25e6-b86e-6311-64797ba92b8f",
                          "1e7f74bb-25e6-b86e-6311-64797ba92b9a",
                        ],
                      },
                      value: "flex",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x197631a3377,
          },
          "a-213": {
            id: "a-213",
            title: "Logo Loop",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-213-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".logo-loop",
                        selectorGuids: ["74fe1b2a-22a3-4798-d103-33921666f931"],
                      },
                      xValue: 0,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-213-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 18e3,
                      target: {
                        selector: ".logo-loop",
                        selectorGuids: ["74fe1b2a-22a3-4798-d103-33921666f931"],
                      },
                      xValue: -100,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-213-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".logo-loop",
                        selectorGuids: ["74fe1b2a-22a3-4798-d103-33921666f931"],
                      },
                      xValue: 0,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1978c4486e9,
          },
          "a-200": {
            id: "a-200",
            title: "PopUp [OPEN]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-200-n",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".product-popup",
                        selectorGuids: ["64a5670e-5f79-1d63-c1d1-0a3e232e871c"],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-200-n-5",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".popup",
                        selectorGuids: ["f1bf27af-71e6-3e5c-7a87-cce040cb256f"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-200-n-3",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".popup",
                        selectorGuids: ["f1bf27af-71e6-3e5c-7a87-cce040cb256f"],
                      },
                      xValue: 0.95,
                      yValue: 0.95,
                      locked: !0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-200-n-2",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".product-popup",
                        selectorGuids: ["64a5670e-5f79-1d63-c1d1-0a3e232e871c"],
                      },
                      value: "flex",
                    },
                  },
                  {
                    id: "a-200-n-6",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 200,
                      target: {
                        selector: ".popup",
                        selectorGuids: ["f1bf27af-71e6-3e5c-7a87-cce040cb256f"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-200-n-4",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 200,
                      target: {
                        selector: ".popup",
                        selectorGuids: ["f1bf27af-71e6-3e5c-7a87-cce040cb256f"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x19781f73ddd,
          },
          "a-217": {
            id: "a-217",
            title: "Grow Card [1]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-217-n",
                    actionTypeId: "PLUGIN_VARIABLE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      value: { size: 0, unit: "rem", value: 36.4375 },
                      target: {
                        objectId: "--_animation---img-1--square-size",
                        selector: ".grow-img-1st",
                        selectorGuids: ["14c80de7-cc6a-08aa-ae33-c5cb5fbbf4ca"],
                      },
                    },
                  },
                  {
                    id: "a-217-n-3",
                    actionTypeId: "PLUGIN_VARIABLE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      value: { size: 50, unit: "%" },
                      target: {
                        objectId: "--_animation---img-1--square-percentage",
                        selector: ".grow-img-1st",
                        selectorGuids: ["14c80de7-cc6a-08aa-ae33-c5cb5fbbf4ca"],
                      },
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-217-n-2",
                    actionTypeId: "PLUGIN_VARIABLE",
                    config: {
                      delay: 0,
                      easing: "easeOut",
                      duration: 500,
                      value: { unit: "rem", value: 36.4375 },
                      target: {
                        objectId: "--_animation---img-1--square-size",
                        selector: ".grow-img-1st",
                        selectorGuids: ["14c80de7-cc6a-08aa-ae33-c5cb5fbbf4ca"],
                      },
                    },
                  },
                  {
                    id: "a-217-n-4",
                    actionTypeId: "PLUGIN_VARIABLE",
                    config: {
                      delay: 0,
                      easing: "easeOut",
                      duration: 500,
                      value: { size: 0, unit: "%" },
                      target: {
                        objectId: "--_animation---img-1--square-percentage",
                        selector: ".grow-img-1st",
                        selectorGuids: ["14c80de7-cc6a-08aa-ae33-c5cb5fbbf4ca"],
                      },
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1978d656b7f,
          },
          "a-221": {
            id: "a-221",
            title: "Grow Card [1] OUT",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-221-n",
                    actionTypeId: "PLUGIN_VARIABLE",
                    config: {
                      delay: 0,
                      easing: "easeIn",
                      duration: 500,
                      value: { size: 0, unit: "rem", value: 36.4375 },
                      target: {
                        objectId: "--_animation---img-1--square-size",
                        selector: ".grow-img-1st",
                        selectorGuids: ["14c80de7-cc6a-08aa-ae33-c5cb5fbbf4ca"],
                      },
                    },
                  },
                  {
                    id: "a-221-n-2",
                    actionTypeId: "PLUGIN_VARIABLE",
                    config: {
                      delay: 0,
                      easing: "easeIn",
                      duration: 500,
                      value: { size: 50, unit: "%" },
                      target: {
                        objectId: "--_animation---img-1--square-percentage",
                        selector: ".grow-img-1st",
                        selectorGuids: ["14c80de7-cc6a-08aa-ae33-c5cb5fbbf4ca"],
                      },
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1978d656b7f,
          },
          "a-218": {
            id: "a-218",
            title: "Grow Card [2]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-218-n-3",
                    actionTypeId: "PLUGIN_VARIABLE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      value: { size: 0, unit: "rem", value: 36.4375 },
                      target: {
                        objectId: "--_animation---img2--square-size",
                        selector: ".grow-img-2nd",
                        selectorGuids: ["0df96f4e-7dfb-ba82-580a-7f62f1b93957"],
                      },
                    },
                  },
                  {
                    id: "a-218-n-4",
                    actionTypeId: "PLUGIN_VARIABLE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      value: { size: 50, unit: "%" },
                      target: {
                        objectId: "--_animation---img2--square-percentage",
                        selector: ".grow-img-2nd",
                        selectorGuids: ["0df96f4e-7dfb-ba82-580a-7f62f1b93957"],
                      },
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-218-n",
                    actionTypeId: "PLUGIN_VARIABLE",
                    config: {
                      delay: 0,
                      easing: "easeOut",
                      duration: 500,
                      value: { unit: "rem", value: 36.4375 },
                      target: {
                        objectId: "--_animation---img2--square-size",
                        selector: ".grow-img-2nd",
                        selectorGuids: ["0df96f4e-7dfb-ba82-580a-7f62f1b93957"],
                      },
                    },
                  },
                  {
                    id: "a-218-n-2",
                    actionTypeId: "PLUGIN_VARIABLE",
                    config: {
                      delay: 0,
                      easing: "easeOut",
                      duration: 500,
                      value: { size: 0, unit: "%" },
                      target: {
                        objectId: "--_animation---img2--square-percentage",
                        selector: ".grow-img-2nd",
                        selectorGuids: ["0df96f4e-7dfb-ba82-580a-7f62f1b93957"],
                      },
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1978d656b7f,
          },
          "a-220": {
            id: "a-220",
            title: "Grow Card [2] OUT",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-220-n",
                    actionTypeId: "PLUGIN_VARIABLE",
                    config: {
                      delay: 0,
                      easing: "easeIn",
                      duration: 500,
                      value: { size: 0, unit: "rem", value: 36.4375 },
                      target: {
                        objectId: "--_animation---img2--square-size",
                        selector: ".grow-img-2nd",
                        selectorGuids: ["0df96f4e-7dfb-ba82-580a-7f62f1b93957"],
                      },
                    },
                  },
                  {
                    id: "a-220-n-2",
                    actionTypeId: "PLUGIN_VARIABLE",
                    config: {
                      delay: 0,
                      easing: "easeIn",
                      duration: 500,
                      value: { size: 50, unit: "%" },
                      target: {
                        objectId: "--_animation---img2--square-percentage",
                        selector: ".grow-img-2nd",
                        selectorGuids: ["0df96f4e-7dfb-ba82-580a-7f62f1b93957"],
                      },
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1978d656b7f,
          },
          "a-216": {
            id: "a-216",
            title: "Grow Card [3]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-216-n",
                    actionTypeId: "PLUGIN_VARIABLE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      value: { size: 50, unit: "%" },
                      target: {
                        objectId: "--_animation---img3--square-percentage",
                        selector: ".grow-img-3rd",
                        selectorGuids: ["86853128-91df-0490-6de4-0faf6ec11e53"],
                      },
                    },
                  },
                  {
                    id: "a-216-n-2",
                    actionTypeId: "PLUGIN_VARIABLE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      value: { size: 0, unit: "rem", value: 36.4375 },
                      target: {
                        objectId: "--_animation---img3--square-size",
                        selector: ".grow-img-3rd",
                        selectorGuids: ["86853128-91df-0490-6de4-0faf6ec11e53"],
                      },
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-216-n-3",
                    actionTypeId: "PLUGIN_VARIABLE",
                    config: {
                      delay: 0,
                      easing: "easeOut",
                      duration: 500,
                      value: { size: 0, unit: "%" },
                      target: {
                        objectId: "--_animation---img3--square-percentage",
                        selector: ".grow-img-3rd",
                        selectorGuids: ["86853128-91df-0490-6de4-0faf6ec11e53"],
                      },
                    },
                  },
                  {
                    id: "a-216-n-4",
                    actionTypeId: "PLUGIN_VARIABLE",
                    config: {
                      delay: 0,
                      easing: "easeOut",
                      duration: 500,
                      value: { unit: "rem", value: 36.4375 },
                      target: {
                        objectId: "--_animation---img3--square-size",
                        selector: ".grow-img-3rd",
                        selectorGuids: ["86853128-91df-0490-6de4-0faf6ec11e53"],
                      },
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1978d656b7f,
          },
          "a-219": {
            id: "a-219",
            title: "Grow Card [3] OUT",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-219-n-3",
                    actionTypeId: "PLUGIN_VARIABLE",
                    config: {
                      delay: 0,
                      easing: "easeOut",
                      duration: 500,
                      value: { size: 50, unit: "%" },
                      target: {
                        objectId: "--_animation---img3--square-percentage",
                        selector: ".grow-img-3rd",
                        selectorGuids: ["86853128-91df-0490-6de4-0faf6ec11e53"],
                      },
                    },
                  },
                  {
                    id: "a-219-n-4",
                    actionTypeId: "PLUGIN_VARIABLE",
                    config: {
                      delay: 0,
                      easing: "easeOut",
                      duration: 500,
                      value: { size: 0, unit: "rem" },
                      target: {
                        objectId: "--_animation---img3--square-size",
                        selector: ".grow-img-3rd",
                        selectorGuids: ["86853128-91df-0490-6de4-0faf6ec11e53"],
                      },
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1978d656b7f,
          },
          "a-222": {
            id: "a-222",
            title: "Slide from bottom",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-222-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".grow-img-contain",
                        selectorGuids: ["83ab9534-2b47-3705-15f6-645462f324d9"],
                      },
                      yValue: 15,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-222-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".grow-img-contain",
                        selectorGuids: ["83ab9534-2b47-3705-15f6-645462f324d9"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-222-n-4",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".grow-img-contain",
                        selectorGuids: ["83ab9534-2b47-3705-15f6-645462f324d9"],
                      },
                      filters: [
                        {
                          type: "blur",
                          filterId: "a980",
                          value: 2,
                          unit: "px",
                        },
                      ],
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-222-n-5",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 750,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".grow-img-contain",
                        selectorGuids: ["83ab9534-2b47-3705-15f6-645462f324d9"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-222-n-8",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 750,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".grow-img-contain",
                        selectorGuids: ["83ab9534-2b47-3705-15f6-645462f324d9"],
                      },
                      filters: [
                        {
                          type: "blur",
                          filterId: "a980",
                          value: 0,
                          unit: "px",
                        },
                      ],
                    },
                  },
                  {
                    id: "a-222-n-7",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 750,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".grow-img-contain",
                        selectorGuids: ["83ab9534-2b47-3705-15f6-645462f324d9"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x197ac0aa58e,
          },
          "a-223": {
            id: "a-223",
            title: "Scale Cta Image",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-223-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".partner-img-main",
                        selectorGuids: ["4002aac6-9d40-6544-b2b5-fe27e124b2bf"],
                      },
                      xValue: 0.9,
                      yValue: 0.9,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-223-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".partner-img-main",
                        selectorGuids: ["4002aac6-9d40-6544-b2b5-fe27e124b2bf"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-223-n-5",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".partner-img-secondary",
                        selectorGuids: ["dc4d18ee-e8ae-e62d-5bbd-93af6a089188"],
                      },
                      xValue: 0.9,
                      yValue: 0.9,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-223-n-6",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".partner-img-secondary",
                        selectorGuids: ["dc4d18ee-e8ae-e62d-5bbd-93af6a089188"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-223-n-3",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outSine",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".partner-img-main",
                        selectorGuids: ["4002aac6-9d40-6544-b2b5-fe27e124b2bf"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-223-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outSine",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".partner-img-main",
                        selectorGuids: ["4002aac6-9d40-6544-b2b5-fe27e124b2bf"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-223-n-7",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 250,
                      easing: "outSine",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".partner-img-secondary",
                        selectorGuids: ["dc4d18ee-e8ae-e62d-5bbd-93af6a089188"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-223-n-8",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 250,
                      easing: "outSine",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".partner-img-secondary",
                        selectorGuids: ["dc4d18ee-e8ae-e62d-5bbd-93af6a089188"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x197ac0e7414,
          },
          "a-224": {
            id: "a-224",
            title: "btn hover in",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-224-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-2.secondary",
                        selectorGuids: [
                          "33dddad5-8967-b766-0c35-27455943b1d3",
                          "33dddad5-8967-b766-0c35-27455943b1e8",
                        ],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-224-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-2.secondary",
                        selectorGuids: [
                          "33dddad5-8967-b766-0c35-27455943b1d3",
                          "33dddad5-8967-b766-0c35-27455943b1e8",
                        ],
                      },
                      xValue: 0.96,
                      yValue: 0.96,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1973a5b2a61,
          },
          "a-225": {
            id: "a-225",
            title: "btn hover out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-225-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 150,
                      target: {
                        selector: ".button-2.secondary",
                        selectorGuids: [
                          "33dddad5-8967-b766-0c35-27455943b1d3",
                          "33dddad5-8967-b766-0c35-27455943b1e8",
                        ],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1973a5b2a61,
          },
          "a-226": {
            id: "a-226",
            title: "Contact [OPEN]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-226-n",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".hs-form-container",
                        selectorGuids: ["21083b3c-fba6-0c94-20c8-b1ab5f895607"],
                      },
                      value: "none",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-226-n-4",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".hs-form-container",
                        selectorGuids: ["21083b3c-fba6-0c94-20c8-b1ab5f895607"],
                      },
                      value: "flex",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x19781f73ddd,
          },
          "a-230": {
            id: "a-230",
            title: "Filter Dropdown [OPEN]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-230-n",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".dropdown-icon",
                        selectorGuids: ["805a7e9f-f85c-c499-ec99-3a2e3c7b67b6"],
                      },
                      xValue: 180,
                      zValue: null,
                      xUnit: "deg",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-230-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".dropdown-icon",
                        selectorGuids: ["805a7e9f-f85c-c499-ec99-3a2e3c7b67b6"],
                      },
                      xValue: 0,
                      zValue: null,
                      xUnit: "deg",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x197f422b3fd,
          },
          "a-231": {
            id: "a-231",
            title: "Filter Dropdown [CLOSE]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-231-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".dropdown-icon",
                        selectorGuids: ["805a7e9f-f85c-c499-ec99-3a2e3c7b67b6"],
                      },
                      xValue: 180,
                      zValue: null,
                      xUnit: "deg",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x197f422b3fd,
          },
          "a-237": {
            id: "a-237",
            title: "Inner Form [OPEN]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-237-n",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".inner-sticky-form",
                        selectorGuids: ["1a57e888-965b-187d-5865-035a87781505"],
                      },
                      value: "none",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-237-n-2",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".inner-sticky-form",
                        selectorGuids: ["1a57e888-965b-187d-5865-035a87781505"],
                      },
                      value: "flex",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x19830b2fa2e,
          },
          "a-238": {
            id: "a-238",
            title: "Inner Form [CLOSE]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-238-n",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".inner-sticky-form",
                        selectorGuids: ["1a57e888-965b-187d-5865-035a87781505"],
                      },
                      value: "none",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19830b2fa2e,
          },
          "a-244": {
            id: "a-244",
            title: "Button[ hover in ] 4",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-244-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button",
                        selectorGuids: ["e112046e-db2f-9925-ef0b-3c4b84f47b03"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-244-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button",
                        selectorGuids: ["e112046e-db2f-9925-ef0b-3c4b84f47b03"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-244-n-3",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button",
                        selectorGuids: ["e112046e-db2f-9925-ef0b-3c4b84f47b03"],
                      },
                      xValue: 0.975,
                      yValue: 0.975,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-244-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button",
                        selectorGuids: ["e112046e-db2f-9925-ef0b-3c4b84f47b03"],
                      },
                      value: 0.8,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18f4da31667,
          },
          "a-245": {
            id: "a-245",
            title: "Button[ hover out ] 4",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-245-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button",
                        selectorGuids: ["e112046e-db2f-9925-ef0b-3c4b84f47b03"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-245-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button",
                        selectorGuids: ["e112046e-db2f-9925-ef0b-3c4b84f47b03"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18f4da31667,
          },
          "a-250": {
            id: "a-250",
            title: "Gallery [OPEN]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-250-n",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".lighbox-popup",
                        selectorGuids: ["6d8ce553-8fc4-3f52-f10c-5082a57c6d25"],
                      },
                      value: "none",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-250-n-2",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".lighbox-popup",
                        selectorGuids: ["6d8ce553-8fc4-3f52-f10c-5082a57c6d25"],
                      },
                      value: "flex",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1985a25dbaf,
          },
          "a-251": {
            id: "a-251",
            title: "Gallery [CLOSE]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-251-n",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".lighbox-popup",
                        selectorGuids: ["6d8ce553-8fc4-3f52-f10c-5082a57c6d25"],
                      },
                      value: "none",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1985a25dbaf,
          },
          "a-252": {
            id: "a-252",
            title: "Featured Card [HOVER IN]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-252-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".featured-card-img",
                        selectorGuids: ["833e6169-c810-8119-6164-910a426de600"],
                      },
                      xValue: 1.1,
                      yValue: 1.1,
                      locked: !0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-252-n-8",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 750,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".featured-card-img",
                        selectorGuids: ["833e6169-c810-8119-6164-910a426de600"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x19778d3a331,
          },
          "a-253": {
            id: "a-253",
            title: "Featured Card [HOVER OUT]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-253-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 750,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".featured-card-img",
                        selectorGuids: ["833e6169-c810-8119-6164-910a426de600"],
                      },
                      xValue: 1.1,
                      yValue: 1.1,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19778d3a331,
          },
          "a-254": {
            id: "a-254",
            title: "Button[ hover in ] 5",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-254-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "686cc039586de2a84281d93c|f69613ae-c746-0ebc-8bb7-bd0f0237a1aa",
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-254-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "686cc039586de2a84281d93c|f69613ae-c746-0ebc-8bb7-bd0f0237a1aa",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-254-n-3",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 200,
                      target: {
                        id: "686cc039586de2a84281d93c|f69613ae-c746-0ebc-8bb7-bd0f0237a1aa",
                      },
                      xValue: 0.975,
                      yValue: 0.975,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-254-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 200,
                      target: {
                        id: "686cc039586de2a84281d93c|f69613ae-c746-0ebc-8bb7-bd0f0237a1aa",
                      },
                      value: 0.8,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18f4da31667,
          },
          "a-255": {
            id: "a-255",
            title: "Button[ hover out ] 5",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-255-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 200,
                      target: {
                        id: "686cc039586de2a84281d93c|f69613ae-c746-0ebc-8bb7-bd0f0237a1aa",
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-255-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 200,
                      target: {
                        id: "686cc039586de2a84281d93c|f69613ae-c746-0ebc-8bb7-bd0f0237a1aa",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18f4da31667,
          },
          "a-256": {
            id: "a-256",
            title: "Nav OPEN",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-256-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav-menu-line.long",
                        selectorGuids: [
                          "602ca277-0abb-d696-d1bf-8826dd1723e9",
                          "c861bf6f-01bf-6e52-f047-8d65eedad099",
                        ],
                      },
                      widthValue: 28,
                      widthUnit: "px",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-256-n-13",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".menu-btn",
                        selectorGuids: ["7839024f-2931-c1d9-5299-2b8c22c9c9db"],
                      },
                      globalSwatchId: "",
                      rValue: 0,
                      bValue: 0,
                      gValue: 0,
                      aValue: 0,
                    },
                  },
                  {
                    id: "a-256-n-9",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav-menu-line.long",
                        selectorGuids: [
                          "602ca277-0abb-d696-d1bf-8826dd1723e9",
                          "c861bf6f-01bf-6e52-f047-8d65eedad099",
                        ],
                      },
                      xValue: 0,
                      yValue: 0,
                      xUnit: "px",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-256-n-3",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav-menu-line.short",
                        selectorGuids: [
                          "602ca277-0abb-d696-d1bf-8826dd1723e9",
                          "2c5ccf6c-10cb-9ce7-8bd8-b265f9191abd",
                        ],
                      },
                      widthValue: 19,
                      widthUnit: "px",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-256-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav-menu-line.long",
                        selectorGuids: [
                          "602ca277-0abb-d696-d1bf-8826dd1723e9",
                          "c861bf6f-01bf-6e52-f047-8d65eedad099",
                        ],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-256-n-4",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav-menu-line.short",
                        selectorGuids: [
                          "602ca277-0abb-d696-d1bf-8826dd1723e9",
                          "2c5ccf6c-10cb-9ce7-8bd8-b265f9191abd",
                        ],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-256-n-10",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav-menu-line.short",
                        selectorGuids: [
                          "602ca277-0abb-d696-d1bf-8826dd1723e9",
                          "2c5ccf6c-10cb-9ce7-8bd8-b265f9191abd",
                        ],
                      },
                      xValue: 0,
                      yValue: 0,
                      xUnit: "px",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-256-n-5",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 250,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav-menu-line.long",
                        selectorGuids: [
                          "602ca277-0abb-d696-d1bf-8826dd1723e9",
                          "c861bf6f-01bf-6e52-f047-8d65eedad099",
                        ],
                      },
                      widthValue: 22,
                      widthUnit: "px",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-256-n-8",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 250,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav-menu-line.short",
                        selectorGuids: [
                          "602ca277-0abb-d696-d1bf-8826dd1723e9",
                          "2c5ccf6c-10cb-9ce7-8bd8-b265f9191abd",
                        ],
                      },
                      zValue: 45,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-256-n-7",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 250,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav-menu-line.long",
                        selectorGuids: [
                          "602ca277-0abb-d696-d1bf-8826dd1723e9",
                          "c861bf6f-01bf-6e52-f047-8d65eedad099",
                        ],
                      },
                      zValue: -45,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-256-n-6",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 250,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav-menu-line.short",
                        selectorGuids: [
                          "602ca277-0abb-d696-d1bf-8826dd1723e9",
                          "2c5ccf6c-10cb-9ce7-8bd8-b265f9191abd",
                        ],
                      },
                      widthValue: 22,
                      widthUnit: "px",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-256-n-11",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 250,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav-menu-line.long",
                        selectorGuids: [
                          "602ca277-0abb-d696-d1bf-8826dd1723e9",
                          "c861bf6f-01bf-6e52-f047-8d65eedad099",
                        ],
                      },
                      xValue: 0,
                      yValue: 3.5,
                      xUnit: "px",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-256-n-12",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 250,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav-menu-line.short",
                        selectorGuids: [
                          "602ca277-0abb-d696-d1bf-8826dd1723e9",
                          "2c5ccf6c-10cb-9ce7-8bd8-b265f9191abd",
                        ],
                      },
                      xValue: 0,
                      yValue: -3.5,
                      xUnit: "px",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1989a89270c,
          },
          "a-257": {
            id: "a-257",
            title: "Nav CLOSE",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-257-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 250,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav-menu-line.long",
                        selectorGuids: [
                          "602ca277-0abb-d696-d1bf-8826dd1723e9",
                          "c861bf6f-01bf-6e52-f047-8d65eedad099",
                        ],
                      },
                      widthValue: 28,
                      widthUnit: "px",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-257-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 250,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav-menu-line.long",
                        selectorGuids: [
                          "602ca277-0abb-d696-d1bf-8826dd1723e9",
                          "c861bf6f-01bf-6e52-f047-8d65eedad099",
                        ],
                      },
                      xValue: 0,
                      yValue: 0,
                      xUnit: "px",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-257-n-3",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 250,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav-menu-line.short",
                        selectorGuids: [
                          "602ca277-0abb-d696-d1bf-8826dd1723e9",
                          "2c5ccf6c-10cb-9ce7-8bd8-b265f9191abd",
                        ],
                      },
                      widthValue: 19,
                      widthUnit: "px",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-257-n-4",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 250,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav-menu-line.long",
                        selectorGuids: [
                          "602ca277-0abb-d696-d1bf-8826dd1723e9",
                          "c861bf6f-01bf-6e52-f047-8d65eedad099",
                        ],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-257-n-5",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 250,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav-menu-line.short",
                        selectorGuids: [
                          "602ca277-0abb-d696-d1bf-8826dd1723e9",
                          "2c5ccf6c-10cb-9ce7-8bd8-b265f9191abd",
                        ],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-257-n-6",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 250,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav-menu-line.short",
                        selectorGuids: [
                          "602ca277-0abb-d696-d1bf-8826dd1723e9",
                          "2c5ccf6c-10cb-9ce7-8bd8-b265f9191abd",
                        ],
                      },
                      xValue: 0,
                      yValue: 0,
                      xUnit: "px",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1989a89270c,
          },
          "a-227": {
            id: "a-227",
            title: "Contact [CLOSE]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-227-n",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".hs-form-container",
                        selectorGuids: ["21083b3c-fba6-0c94-20c8-b1ab5f895607"],
                      },
                      value: "none",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19781f73ddd,
          },
          "a-262": {
            id: "a-262",
            title: "Nav [SCROLL]",
            continuousParameterGroups: [
              {
                id: "a-262-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 9,
                    actionItems: [
                      {
                        id: "a-262-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".navbar",
                            selectorGuids: [
                              "5eb90974-7e38-5092-8268-4c908831933a",
                            ],
                          },
                          yValue: 0,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 10,
                    actionItems: [
                      {
                        id: "a-262-n-2",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".navbar",
                            selectorGuids: [
                              "5eb90974-7e38-5092-8268-4c908831933a",
                            ],
                          },
                          yValue: -100,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x1989e0a1b07,
          },
          "a-233": {
            id: "a-233",
            title: "FIlter [OPEN]-[Tab]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-233-n-5",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".model-filters.move",
                        selectorGuids: [
                          "807b5bbd-891d-1308-dd25-e002faf5f427",
                          "6fb48aa6-950f-c06f-0a89-7acea360b050",
                        ],
                      },
                      xValue: 100,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-233-n-7",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".navbar",
                        selectorGuids: ["5eb90974-7e38-5092-8268-4c908831933a"],
                      },
                      value: "block",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-233-n-6",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".model-filters.move",
                        selectorGuids: [
                          "807b5bbd-891d-1308-dd25-e002faf5f427",
                          "6fb48aa6-950f-c06f-0a89-7acea360b050",
                        ],
                      },
                      xValue: 0,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-233-n-8",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".navbar",
                        selectorGuids: ["5eb90974-7e38-5092-8268-4c908831933a"],
                      },
                      value: "none",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1980508a474,
          },
          "a-228": {
            id: "a-228",
            title: "Filters [OPEN] - [Desk]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-228-n-10",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        selector: ".model-form-wrapper",
                        selectorGuids: ["530c67cc-211b-7282-ae04-f675a7cd1d01"],
                      },
                      xValue: 0,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-228-n-12",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".model-form-wrapper",
                        selectorGuids: ["530c67cc-211b-7282-ae04-f675a7cd1d01"],
                      },
                      widthValue: 100,
                      widthUnit: "%",
                      heightUnit: "AUTO",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-228-n-6",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        selector: ".model-collection-wrapper",
                        selectorGuids: ["6a129419-7d69-1b24-2fd9-cba9397f8166"],
                      },
                      widthValue: 76,
                      heightValue: 100,
                      widthUnit: "%",
                      heightUnit: "%",
                      locked: !1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-228-n-11",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        selector: ".model-form-wrapper",
                        selectorGuids: ["530c67cc-211b-7282-ae04-f675a7cd1d01"],
                      },
                      xValue: -100,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-228-n-9",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        selector: ".model-collection-wrapper",
                        selectorGuids: ["6a129419-7d69-1b24-2fd9-cba9397f8166"],
                      },
                      widthValue: 100,
                      heightValue: 100,
                      widthUnit: "%",
                      heightUnit: "%",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-228-n-13",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 200,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".model-form-wrapper",
                        selectorGuids: ["530c67cc-211b-7282-ae04-f675a7cd1d01"],
                      },
                      widthValue: 0,
                      widthUnit: "px",
                      heightUnit: "AUTO",
                      locked: !1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x197e996c5d5,
          },
          "a-229": {
            id: "a-229",
            title: "Filters [CLOSE]- [Desk]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-229-n-5",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".model-form-wrapper",
                        selectorGuids: ["530c67cc-211b-7282-ae04-f675a7cd1d01"],
                      },
                      widthValue: 100,
                      widthUnit: "%",
                      heightUnit: "AUTO",
                      locked: !1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-229-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        selector: ".model-form-wrapper",
                        selectorGuids: ["530c67cc-211b-7282-ae04-f675a7cd1d01"],
                      },
                      xValue: 0,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-229-n-4",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        selector: ".model-collection-wrapper",
                        selectorGuids: ["6a129419-7d69-1b24-2fd9-cba9397f8166"],
                      },
                      widthValue: 76,
                      heightValue: 100,
                      widthUnit: "%",
                      heightUnit: "%",
                      locked: !1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x197e996c5d5,
          },
          "a-234": {
            id: "a-234",
            title: "FIlter [CLOSE]-[Tab]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-234-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "PARENT",
                        selector: ".model-filters",
                        selectorGuids: ["807b5bbd-891d-1308-dd25-e002faf5f427"],
                      },
                      xValue: 100,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-234-n-5",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".navbar",
                        selectorGuids: ["5eb90974-7e38-5092-8268-4c908831933a"],
                      },
                      value: "block",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1980508a474,
          },
          "a-241": {
            id: "a-241",
            title: "Show More [list OPEN]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-241-n-8",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".show-more-list",
                        selectorGuids: ["9bba9d7b-c100-448a-3558-698814bfe451"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-241-n-10",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".show-more-list",
                        selectorGuids: ["9bba9d7b-c100-448a-3558-698814bfe451"],
                      },
                      widthValue: 100,
                      heightValue: 0,
                      widthUnit: "%",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-241-n-9",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        selector: ".show-more-list",
                        selectorGuids: ["9bba9d7b-c100-448a-3558-698814bfe451"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-241-n-11",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".show-more-list",
                        selectorGuids: ["9bba9d7b-c100-448a-3558-698814bfe451"],
                      },
                      widthValue: 100,
                      widthUnit: "%",
                      heightUnit: "AUTO",
                      locked: !1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x198372c5eaa,
          },
          "a-266": {
            id: "a-266",
            title: "Show More [CLOSE]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-266-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        selector: ".show-more-list",
                        selectorGuids: ["9bba9d7b-c100-448a-3558-698814bfe451"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-266-n-2",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".show-more-list",
                        selectorGuids: ["9bba9d7b-c100-448a-3558-698814bfe451"],
                      },
                      widthValue: 100,
                      heightValue: 0,
                      widthUnit: "%",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x198372c5eaa,
          },
          "a-190": {
            id: "a-190",
            title: "FAQ 1 - Open",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-190-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".faq-answer-wp",
                        selectorGuids: ["056292b3-f217-4ac0-27e1-6f17d39537ac"],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-190-n-8",
                    actionTypeId: "STYLE_BORDER",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".faq",
                        selectorGuids: ["056292b3-f217-4ac0-27e1-6f17d39537a9"],
                      },
                      globalSwatchId: "",
                      rValue: 229,
                      bValue: 229,
                      gValue: 229,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-190-n-6",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".faq",
                        selectorGuids: ["056292b3-f217-4ac0-27e1-6f17d39537a9"],
                      },
                      globalSwatchId: "",
                      rValue: 255,
                      bValue: 255,
                      gValue: 255,
                      aValue: 1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-190-n-2",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".faq-answer-wp",
                        selectorGuids: ["056292b3-f217-4ac0-27e1-6f17d39537ac"],
                      },
                      widthUnit: "PX",
                      heightUnit: "AUTO",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-190-n-5",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".faq-line._2",
                        selectorGuids: [
                          "6d40de5d-bf9e-4bd1-0ee4-0ae191876960",
                          "19d6dfbd-16b9-a46d-b302-7a63d27e64f7",
                        ],
                      },
                      xValue: null,
                      zValue: 180,
                      xUnit: "deg",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-190-n-4",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".faq-line._1",
                        selectorGuids: [
                          "6d40de5d-bf9e-4bd1-0ee4-0ae191876960",
                          "1466866f-e090-ef95-d50a-00e3bb2c8bb0",
                        ],
                      },
                      xValue: null,
                      zValue: 90,
                      xUnit: "deg",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-190-n-7",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".faq",
                        selectorGuids: ["056292b3-f217-4ac0-27e1-6f17d39537a9"],
                      },
                      globalSwatchId: "",
                      rValue: 247,
                      bValue: 247,
                      gValue: 247,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-190-n-9",
                    actionTypeId: "STYLE_BORDER",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".faq",
                        selectorGuids: ["056292b3-f217-4ac0-27e1-6f17d39537a9"],
                      },
                      globalSwatchId: "",
                      rValue: 229,
                      bValue: 229,
                      gValue: 229,
                      aValue: 0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x17b1ea539da,
          },
          "a-191": {
            id: "a-191",
            title: "FAQ 1 - Close",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-191-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".faq-answer-wp",
                        selectorGuids: ["056292b3-f217-4ac0-27e1-6f17d39537ac"],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-191-n-5",
                    actionTypeId: "STYLE_BORDER",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".faq",
                        selectorGuids: ["056292b3-f217-4ac0-27e1-6f17d39537a9"],
                      },
                      globalSwatchId: "",
                      rValue: 229,
                      bValue: 229,
                      gValue: 229,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-191-n-4",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".faq",
                        selectorGuids: ["056292b3-f217-4ac0-27e1-6f17d39537a9"],
                      },
                      globalSwatchId: "",
                      rValue: 255,
                      bValue: 255,
                      gValue: 255,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-191-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".faq-line._1",
                        selectorGuids: [
                          "6d40de5d-bf9e-4bd1-0ee4-0ae191876960",
                          "1466866f-e090-ef95-d50a-00e3bb2c8bb0",
                        ],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-191-n-3",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".faq-line._2",
                        selectorGuids: [
                          "6d40de5d-bf9e-4bd1-0ee4-0ae191876960",
                          "19d6dfbd-16b9-a46d-b302-7a63d27e64f7",
                        ],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x17b1ea539da,
          },
          "a-267": {
            id: "a-267",
            title: "Button[ hover in ] 6",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-267-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button",
                        selectorGuids: ["e112046e-db2f-9925-ef0b-3c4b84f47b03"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-267-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button",
                        selectorGuids: ["e112046e-db2f-9925-ef0b-3c4b84f47b03"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-267-n-3",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button",
                        selectorGuids: ["e112046e-db2f-9925-ef0b-3c4b84f47b03"],
                      },
                      xValue: 0.975,
                      yValue: 0.975,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-267-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button",
                        selectorGuids: ["e112046e-db2f-9925-ef0b-3c4b84f47b03"],
                      },
                      value: 0.8,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18f4da31667,
          },
          "a-268": {
            id: "a-268",
            title: "Button[ hover out ] 6",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-268-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button",
                        selectorGuids: ["e112046e-db2f-9925-ef0b-3c4b84f47b03"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-268-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button",
                        selectorGuids: ["e112046e-db2f-9925-ef0b-3c4b84f47b03"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18f4da31667,
          },
          "a-269": {
            id: "a-269",
            title: "fs-toc EXPAND 3",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-269-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".fs-toc_link-wrapper",
                        selectorGuids: ["8d79bec1-1752-6794-16cd-f573beb45119"],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-269-n-2",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 200,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".fs-toc_link-wrapper",
                        selectorGuids: ["8d79bec1-1752-6794-16cd-f573beb45119"],
                      },
                      widthUnit: "PX",
                      heightUnit: "AUTO",
                      locked: !1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18071d6c566,
          },
          "a-270": {
            id: "a-270",
            title: "fs-toc COLLAPSE 3",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-270-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 200,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".fs-toc_link-wrapper",
                        selectorGuids: ["8d79bec1-1752-6794-16cd-f573beb45119"],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18071d6c566,
          },
          "a-271": {
            id: "a-271",
            title: "Button[ hover in ] 7",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-271-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button",
                        selectorGuids: ["e112046e-db2f-9925-ef0b-3c4b84f47b03"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-271-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button",
                        selectorGuids: ["e112046e-db2f-9925-ef0b-3c4b84f47b03"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-271-n-3",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button",
                        selectorGuids: ["e112046e-db2f-9925-ef0b-3c4b84f47b03"],
                      },
                      xValue: 0.975,
                      yValue: 0.975,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-271-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button",
                        selectorGuids: ["e112046e-db2f-9925-ef0b-3c4b84f47b03"],
                      },
                      value: 0.8,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18f4da31667,
          },
          "a-272": {
            id: "a-272",
            title: "Button[ hover out ] 7",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-272-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button",
                        selectorGuids: ["e112046e-db2f-9925-ef0b-3c4b84f47b03"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-272-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button",
                        selectorGuids: ["e112046e-db2f-9925-ef0b-3c4b84f47b03"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18f4da31667,
          },
          "a-273": {
            id: "a-273",
            title: "Button[ hover in ] 8",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-273-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button",
                        selectorGuids: ["e112046e-db2f-9925-ef0b-3c4b84f47b03"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-273-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button",
                        selectorGuids: ["e112046e-db2f-9925-ef0b-3c4b84f47b03"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-273-n-3",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button",
                        selectorGuids: ["e112046e-db2f-9925-ef0b-3c4b84f47b03"],
                      },
                      xValue: 0.975,
                      yValue: 0.975,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-273-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button",
                        selectorGuids: ["e112046e-db2f-9925-ef0b-3c4b84f47b03"],
                      },
                      value: 0.8,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18f4da31667,
          },
          "a-274": {
            id: "a-274",
            title: "Button[ hover out ] 8",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-274-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button",
                        selectorGuids: ["e112046e-db2f-9925-ef0b-3c4b84f47b03"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-274-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button",
                        selectorGuids: ["e112046e-db2f-9925-ef0b-3c4b84f47b03"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18f4da31667,
          },
          "a-275": {
            id: "a-275",
            title: "Error hover [IN]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-275-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".error-img-wp",
                        selectorGuids: ["4c18b623-f26c-559e-cc91-fe1c1b69feeb"],
                      },
                      xValue: 0.9,
                      yValue: 0.9,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-275-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".error-img-wp",
                        selectorGuids: ["4c18b623-f26c-559e-cc91-fe1c1b69feeb"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-275-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 500,
                      target: {
                        selector: ".error-img-wp",
                        selectorGuids: ["4c18b623-f26c-559e-cc91-fe1c1b69feeb"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-275-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 300,
                      target: {
                        selector: ".error-img-wp",
                        selectorGuids: ["4c18b623-f26c-559e-cc91-fe1c1b69feeb"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x199b854f0c4,
          },
          "a-276": {
            id: "a-276",
            title: "Error hover [OUT]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-276-n-3",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 500,
                      target: {
                        selector: ".error-img-wp",
                        selectorGuids: ["4c18b623-f26c-559e-cc91-fe1c1b69feeb"],
                      },
                      xValue: 0.9,
                      yValue: 0.9,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-276-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 300,
                      target: {
                        selector: ".error-img-wp",
                        selectorGuids: ["4c18b623-f26c-559e-cc91-fe1c1b69feeb"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x199b854f0c4,
          },
          "a-277": {
            id: "a-277",
            title: "Error IMG",
            continuousParameterGroups: [
              {
                id: "a-277-p",
                type: "MOUSE_X",
                parameterLabel: "Mouse X",
                continuousActionGroups: [
                  {
                    keyframe: 10,
                    actionItems: [
                      {
                        id: "a-277-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "ease",
                          duration: 500,
                          target: {
                            selector: ".error-img-wp",
                            selectorGuids: [
                              "4c18b623-f26c-559e-cc91-fe1c1b69feeb",
                            ],
                          },
                          xValue: -50,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-277-n-2",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "ease",
                          duration: 500,
                          target: {
                            selector: ".error-img-wp",
                            selectorGuids: [
                              "4c18b623-f26c-559e-cc91-fe1c1b69feeb",
                            ],
                          },
                          xValue: 50,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
              {
                id: "a-277-p-2",
                type: "MOUSE_Y",
                parameterLabel: "Mouse Y",
                continuousActionGroups: [],
              },
            ],
            createdOn: 0x199b857ab8d,
          },
          slideInBottom: {
            id: "slideInBottom",
            useFirstGroupAsInitialState: !0,
            actionItemGroups: [
              {
                actionItems: [
                  {
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      duration: 0,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      value: 0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      duration: 0,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      xValue: 0,
                      yValue: 100,
                      xUnit: "PX",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 1e3,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      xValue: 0,
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 1e3,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      value: 1,
                    },
                  },
                ],
              },
            ],
          },
          shrinkIn: {
            id: "shrinkIn",
            useFirstGroupAsInitialState: !0,
            actionItemGroups: [
              {
                actionItems: [
                  {
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      duration: 0,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      value: 0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      duration: 0,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      xValue: 1.25,
                      yValue: 1.25,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 1e3,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      xValue: 1,
                      yValue: 1,
                    },
                  },
                  {
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 1e3,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      value: 1,
                    },
                  },
                ],
              },
            ],
          },
        },
        site: {
          mediaQueries: [
            { key: "main", min: 992, max: 1e4 },
            { key: "medium", min: 768, max: 991 },
            { key: "small", min: 480, max: 767 },
            { key: "tiny", min: 0, max: 479 },
          ],
        },
      }),
        "complete" === document.readyState
          ? e()
          : document.addEventListener("readystatechange", () => {
              "complete" === document.readyState && e();
            });
    },
  },
]);
