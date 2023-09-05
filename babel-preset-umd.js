module.exports = function () {
  return {
    plugins: [
      [
        require("babel-plugin-auto-import"),
        {
          declarations: [
            {
              default: "AAccordionExports",
              members: [
                "AAccordion",
                "AAccordionPanel",
                "AAccordionHeader",
                "AAccordionHeaderTitle",
                "AAccordionBody"
              ],
              path: "@cisco-sbg-ui/magna-react"
            },
            {default: "AAlert", path: "@cisco-sbg-ui/magna-react"},
            {default: "AApp", path: "@cisco-sbg-ui/magna-react"},
            {default: "AAutocomplete", path: "@cisco-sbg-ui/magna-react"},
            {
              default: "AAutoThemeExports",
              members: ["AAutoTheme", "AAutoThemeContext", "useAAutoTheme"],
              path: "@cisco-sbg-ui/magna-react"
            },
            {default: "ABadge", path: "@cisco-sbg-ui/magna-react"},
            {default: "ABreadcrumb", path: "@cisco-sbg-ui/magna-react"},
            {
              default: "ABreakpointExports",
              members: ["useABreakpoint"],
              path: "@cisco-sbg-ui/magna-react"
            },
            {default: "AButton", path: "@cisco-sbg-ui/magna-react"},
            {default: "AButtonGroup", path: "@cisco-sbg-ui/magna-react"},
            {
              default: "ACardExports",
              members: [
                "ACardContainer",
                "ACardBasic",
                "ACardItem",
                "ACardHeader",
                "ACardTitle",
                "ACardSubTitle",
                "ACardContent",
                "ACardFooter"
              ],
              path: "@cisco-sbg-ui/magna-react"
            },
            {default: "ACheckbox", path: "@cisco-sbg-ui/magna-react"},
            {default: "ACombobox", path: "@cisco-sbg-ui/magna-react"},
            {
              default: "AContextualNotification",
              path: "@cisco-sbg-ui/magna-react"
            },
            {
              default: "AContextualNotificationMenu",
              path: "@cisco-sbg-ui/magna-react"
            },
            {default: "ACopyButton", path: "@cisco-sbg-ui/magna-react"},
            {default: "ADataTable", path: "@cisco-sbg-ui/magna-react"},
            {
              default: "ADatePickerExports",
              members: [
                "ADatePicker",
                "ADateRangePicker",
                "useADateRange",
                "useGetADateRange"
              ],
              path: "@cisco-sbg-ui/magna-react"
            },
            {default: "ADialog", path: "@cisco-sbg-ui/magna-react"},
            {default: "ADivider", path: "@cisco-sbg-ui/magna-react"},
            {
              default: "ADrawerExports",
              members: [
                "ADrawer",
                "ADrawerBody",
                "ADrawerContent",
                "ADrawerHeader",
                "ADrawerFooter",
                "ADrawerSubtitle",
                "ADrawerTitle"
              ],
              path: "@cisco-sbg-ui/magna-react"
            },
            {default: "AEmptyState", path: "@cisco-sbg-ui/magna-react"},
            {default: "AFieldBase", path: "@cisco-sbg-ui/magna-react"},
            {
              default: "AFooterExports",
              members: ["AFooter", "AFooterLegal"],
              path: "@cisco-sbg-ui/magna-react"
            },
            {
              default: "AFormExports",
              members: ["AForm", "AFormContext"],
              path: "@cisco-sbg-ui/magna-react"
            },
            {default: "AHint", path: "@cisco-sbg-ui/magna-react"},
            {default: "AIcon", path: "@cisco-sbg-ui/magna-react"},
            {
              default: "AInlineInputBaseExports",
              members: [
                "AInlineInputBasePropTypes",
                "AInlineInputBasePropTypes"
              ],
              path: "@cisco-sbg-ui/magna-react"
            },
            {default: "AInlineTextarea", path: "@cisco-sbg-ui/magna-react"},
            {default: "AInlineTextInput", path: "@cisco-sbg-ui/magna-react"},
            {default: "AInputBase", path: "@cisco-sbg-ui/magna-react"},
            {default: "AInView", path: "@cisco-sbg-ui/magna-react"},
            {
              default: "ALayoutExports",
              members: ["AContainer", "ARow", "ACol", "ASpacer"],
              path: "@cisco-sbg-ui/magna-react"
            },
            {
              default: "AListExports",
              members: [
                "AList",
                "AListItem",
                "AListItemAvatar",
                "AListItemContent",
                "AListItemDivider",
                "AListItemGroup",
                "AListItemSubtitle",
                "AListItemTitle",
                "AListItemAction"
              ],
              path: "@cisco-sbg-ui/magna-react"
            },
            {
              default: "ALoaderExports",
              members: ["ACiscoLoader", "ADotLoader", "APageLoader", "ALoader"],
              path: "@cisco-sbg-ui/magna-react"
            },
            {default: "AMenu", path: "@cisco-sbg-ui/magna-react"},
            {default: "AMenuBase", path: "@cisco-sbg-ui/magna-react"},
            {default: "AModal", path: "@cisco-sbg-ui/magna-react"},
            {default: "AMount", path: "@cisco-sbg-ui/magna-react"},
            {default: "AMultiSelect", path: "@cisco-sbg-ui/magna-react"},
            {default: "ANetworkValue", path: "@cisco-sbg-ui/magna-react"},
            {
              default: "APageLayoutExports",
              members: [
                "APageContainer",
                "APageHeader",
                "APageTitle",
                "APageDescription",
                "APageLabel",
                "APageTitleContent",
                "APageTitleContentLeft",
                "APageTitleContentRight",
                "APageTitleText"
              ],
              path: "@cisco-sbg-ui/magna-react"
            },
            {default: "APageOverlay", path: "@cisco-sbg-ui/magna-react"},
            {default: "APagination", path: "@cisco-sbg-ui/magna-react"},
            {
              default: "APanelExports",
              members: [
                "APanel",
                "APanelHeader",
                "APanelTitle",
                "APanelBody",
                "APanelFooter"
              ],
              path: "@cisco-sbg-ui/magna-react"
            },
            {default: "APopover", path: "@cisco-sbg-ui/magna-react"},
            {default: "AProgressbar", path: "@cisco-sbg-ui/magna-react"},
            {default: "ARadio", path: "@cisco-sbg-ui/magna-react"},
            {default: "ASelect", path: "@cisco-sbg-ui/magna-react"},
            {default: "ASimpleTable", path: "@cisco-sbg-ui/magna-react"},
            {
              default: "ASkeletonExports",
              members: [
                "ASkeleton",
                "ASkeletonHeader",
                "ASkeletonBlock",
                "ASkeletonText"
              ],
              path: "@cisco-sbg-ui/magna-react"
            },
            {default: "ASlider", path: "@cisco-sbg-ui/magna-react"},
            {default: "ASpinner", path: "@cisco-sbg-ui/magna-react"},
            {
              default: "AStepperExports",
              members: ["AStepper", "AStep", "AStepTitle", "AStepDescription"],
              path: "@cisco-sbg-ui/magna-react"
            },
            {default: "ASwitch", path: "@cisco-sbg-ui/magna-react"},
            {
              default: "ATabsExports",
              members: ["ATabGroup", "ATab", "ATabHeading"],
              path: "@cisco-sbg-ui/magna-react"
            },
            {default: "ATag", path: "@cisco-sbg-ui/magna-react"},
            {default: "ATextarea", path: "@cisco-sbg-ui/magna-react"},
            {default: "ATextInput", path: "@cisco-sbg-ui/magna-react"},
            {
              default: "AThemeExports",
              members: ["ATheme", "AThemeContext", "useATheme"],
              path: "@cisco-sbg-ui/magna-react"
            },
            {
              default: "ATimelineExports",
              members: [
                "ATimeline",
                "ATimelineItem",
                "ATimelineItemBody",
                "ATimelineItemTitle"
              ],
              path: "@cisco-sbg-ui/magna-react"
            },
            {default: "AToast", path: "@cisco-sbg-ui/magna-react"},
            {
              default: "AToasterExports",
              members: ["useAToaster", "AToastPlate"],
              path: "@cisco-sbg-ui/magna-react"
            },
            {
              default: "ATooltipExports",
              members: ["ATooltipPropTypes", "ATooltip", "ATooltipPropTypes"],
              path: "@cisco-sbg-ui/magna-react"
            },
            {default: "ATree", path: "@cisco-sbg-ui/magna-react"},
            {default: "ATriggerTooltip", path: "@cisco-sbg-ui/magna-react"}
          ]
        }
      ]
    ]
  };
};
