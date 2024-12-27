export default class MyPlugin {
  name = 'ReferenceContactsWidget'

  install(pluginManager) {
    // here, we use jbrequire to reference packages exported through JBrowse
    const { ConfigurationSchema } = pluginManager.jbrequire(
      '@jbrowse/core/configuration',
    )
    const WidgetType = pluginManager.jbrequire(
      '@jbrowse/core/pluggableElementTypes/WidgetType',
    )

    const { ElementId } = pluginManager.jbrequire(
      '@jbrowse/core/util/types/mst',
    )
    const { types } = pluginManager.jbrequire('mobx-state-tree')

    const React = pluginManager.jbrequire('react')

    // this is our react component
    const CiteWidget = props => {
      // React.createElement can be used to add html to our widget component.
      // We write out raw React.createElement code because JSX requires a build
      // step and can't be used very easily in the no build plugin context
    const citecontent = React.createElement(
      'div', 
      null, 
      React.createElement('h1', null, 'Citing HaemoBrowse'),
      React.createElement('p', null, 'A reference for HaemoBrowse will be available soon.'),
      React.createElement('p', null, ''),
      React.createElement('p', null, ''),
      React.createElement("span", null, React.createElement("a", {href: ""}, "" )))
      return React.createElement('div', null, [citecontent])
    }
    const ContactWidget = props => {
      // React.createElement can be used to add html to our widget component.
      // We write out raw React.createElement code because JSX requires a build
      // step and can't be used very easily in the no build plugin context
    const contactcontent = React.createElement(
      'div', 
      null, 
      React.createElement('h1', null, 'Contact and feedback'),
      React.createElement('p', null, 'Thank you for visiting! This genome browser was developed by the Veening lab at the University of Lausanne, Switzerland. If you have any questions or feedback, please contact us via email.'),
      React.createElement('p', null, 'Email: ', React.createElement("a", {href: "mailto:Veening.lab@gmail.com"}, "Veening.lab@gmail.com" )))
      return React.createElement('div', null, [contactcontent])
    }
    const DataaAvailabilityWidget = props => {
      // React.createElement can be used to add html to our widget component.
      // We write out raw React.createElement code because JSX requires a build
      // step and can't be used very easily in the no build plugin context
    const availabilitycontent = React.createElement(
      'div', 
      null, 
      React.createElement('h1', null, 'Data Availability'),
      React.createElement('p', null, 'Genomes displayed within HaemoBrowse are available from NCBI under accession numbers ', React.createElement("a", {href: "https://www.ncbi.nlm.nih.gov/datasets/genome/GCF_000012185.1/"}, "GCF_000012185.1"),' (86-028NP), ', React.createElement("a", {href: "https://www.ncbi.nlm.nih.gov/datasets/genome/GCF_000767075.1/"}, "GCF_000767075.1"), ' (NTHi375), ', React.createElement("a", {href: "https://www.ncbi.nlm.nih.gov/datasets/genome/GCF_000165525.1/"}, "GCF_000165525.1"), ' (R2866), and ', React.createElement("a", {href: "https://www.ncbi.nlm.nih.gov/datasets/genome/GCF_000027305.1/"}, "GCF_000165525.1"), ' (RdKW20).'),
      React.createElement('p', null, ''))
      return React.createElement('div', null, [availabilitycontent])
    }

    // we're adding a widget that we can open upon clicking on our menu item
    pluginManager.addWidgetType(() => {
      // adding a widget to the plugin
      return new WidgetType({
        name: 'CiteWidget',
        heading: 'Cite HaemoBrowse',
        configSchema: ConfigurationSchema('CiteWidget', {}),
        stateModel: types.model('CiteWidget', {
          id: ElementId,
          type: types.literal('CiteWidget'),
        }),
        // we're going to provide this component ourselves
        ReactComponent: CiteWidget,
      })
    })
        pluginManager.addWidgetType(() => {
          // adding a widget to the plugin
          return new WidgetType({
            name: 'ContactWidget',
            heading: 'Contact',
            configSchema: ConfigurationSchema('ContactWidget', {}),
            stateModel: types.model('ContactWidget', {
              id: ElementId,
              type: types.literal('ContactWidget'),
            }),
            // we're going to provide this component ourselves
            ReactComponent: ContactWidget,
          })
        })
        pluginManager.addWidgetType(() => {
          // adding a widget to the plugin
          return new WidgetType({
            name: 'DataaAvailabilityWidget',
            heading: 'Data availability',
            configSchema: ConfigurationSchema('DataaAvailabilityWidget', {}),
            stateModel: types.model('DataaAvailabilityWidget', {
              id: ElementId,
              type: types.literal('DataaAvailabilityWidget'),
            }),
            // we're going to provide this component ourselves
            ReactComponent: DataaAvailabilityWidget,
          })
        })
  }

  configure(pluginManager) {
    if (pluginManager.rootModel) {
      pluginManager.rootModel.insertMenu('Reference and contact', 10)
      pluginManager.rootModel.appendToMenu('Reference and contact', {
        label: 'Citing HaemoBrowse',
        onClick: session => {
          // upon clicking on this menu item, we need to add and show our new widget
          const widget = session.addWidget('CiteWidget', 'citeWidget', {
            view: self,
          })
          session.showWidget(widget)
        },
      })
      pluginManager.rootModel.appendToMenu('Reference and contact', {
        label: 'Contact and feedback',
        onClick: session => {
          // upon clicking on this menu item, we need to add and show our new widget
          const widget = session.addWidget('ContactWidget', 'contactWidget', {
            view: self,
          })
          session.showWidget(widget)
        },
      })
      pluginManager.rootModel.appendToMenu('Reference and contact', {
        label: 'Data availability',
        onClick: session => {
          // upon clicking on this menu item, we need to add and show our new widget
          const widget = session.addWidget('DataaAvailabilityWidget', 'dataaAvailabilityWidget', {
            view: self,
          })
          session.showWidget(widget)
        },
      })
    }
  }
}