import addkeyword, { addkeywordBuilder } from './addkeyword'
import Command from './command'
import createchannel, { createchannelBuilder } from './createchannel'
import createrole, { createroleBuilder } from './createrole'
import deletekeyword, { deletekeywordBuilder } from './deletekeyword'
import deleterole, { deleteroleBuilder } from './deleterole'
import info, { infoBuilder } from './info'
import invitechannel, { invitechannelBuilder } from './invitechannel'
import invitemember, { invitememberBuilder } from './invitemember'
import inviterole, { inviteroleBuilder } from './inviterole'
import keywordlist, { keywordlistBuilder } from './keywordlist'
import leavechannel, { leavechannelBuilder } from './leavechannel'
import removerole, { removeroleBuilder } from './removerole'
import setrole, { setroleBuilder } from './setrole'
import uninvitemember, { uninvitememberBuilder } from './uninvitemember'
import uninviterole, { uninviteroleBuilder } from './uninviterole'

export default [
  new Command({
    name: 'addkeyword',
    runner: addkeyword,
    builder: addkeywordBuilder
  }),
  new Command({
    name: 'createchannel',
    runner: createchannel,
    builder: createchannelBuilder
  }),
  new Command({
    name: 'createrole',
    runner: createrole,
    builder: createroleBuilder
  }),
  new Command({
    name: 'deletekeyword',
    runner: deletekeyword,
    builder: deletekeywordBuilder
  }),
  new Command({
    name: 'deleterole',
    runner: deleterole,
    builder: deleteroleBuilder
  }),
  new Command({
    name: 'info',
    runner: info,
    builder: infoBuilder
  }),
  new Command({
    name: 'invitechannel',
    runner: invitechannel,
    builder: invitechannelBuilder
  }),
  new Command({
    name: 'invitemember',
    runner: invitemember,
    builder: invitememberBuilder
  }),
  new Command({
    name: 'inviterole',
    runner: inviterole,
    builder: inviteroleBuilder
  }),
  new Command({
    name: 'keywordlist',
    runner: keywordlist,
    builder: keywordlistBuilder
  }),
  new Command({
    name: 'leavechannel',
    runner: leavechannel,
    builder: leavechannelBuilder
  }),
  new Command({
    name: 'removerole',
    runner: removerole,
    builder: removeroleBuilder
  }),
  new Command({
    name: 'setrole',
    runner: setrole,
    builder: setroleBuilder
  }),
  new Command({
    name: 'uninvitemember',
    runner: uninvitemember,
    builder: uninvitememberBuilder
  }),
  new Command({
    name: 'uninviterole',
    runner: uninviterole,
    builder: uninviteroleBuilder
  })
] as Command[]
