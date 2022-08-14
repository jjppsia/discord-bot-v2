import Command from './command'
import createchannel, { createchannelBuilder } from './createchannel'
import info, { infoBuilder } from './info'
import invitechannel, { invitechannelBuilder } from './invitechannel'
import invitemember, { invitememberBuilder } from './invitemember'
import inviterole, { inviteroleBuilder } from './inviterole'
import keywordadd, { keywordaddBuilder } from './keywordadd'
import keyworddelete, { keyworddeleteBuilder } from './keyworddelete'
import keywordlist, { keywordlistBuilder } from './keywordlist'
import leavechannel, { leavechannelBuilder } from './leavechannel'
import rolecreate, { rolecreateBuilder } from './rolecreate'
import roledelete, { roledeleteBuilder } from './roledelete'
import roleremove, { roleremoveBuilder } from './roleremove'
import roleset, { rolesetBuilder } from './roleset'
import rolesetrole, { rolesetroleBuilder } from './rolesetrole'
import uninvitemember, { uninvitememberBuilder } from './uninvitemember'
import uninviterole, { uninviteroleBuilder } from './uninviterole'

export default [
  new Command({
    name: 'rolecreate',
    runner: rolecreate,
    builder: rolecreateBuilder
  }),
  new Command({
    name: 'roleset',
    runner: roleset,
    builder: rolesetBuilder
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
    name: 'roledelete',
    runner: roledelete,
    builder: roledeleteBuilder
  }),
  new Command({
    name: 'keywordadd',
    runner: keywordadd,
    builder: keywordaddBuilder
  }),
  new Command({
    name: 'roleremove',
    runner: roleremove,
    builder: roleremoveBuilder
  }),
  new Command({
    name: 'rolesetrole',
    runner: rolesetrole,
    builder: rolesetroleBuilder
  }),
  new Command({
    name: 'keywordlist',
    runner: keywordlist,
    builder: keywordlistBuilder
  }),
  new Command({
    name: 'keyworddelete',
    runner: keyworddelete,
    builder: keyworddeleteBuilder
  }),
  new Command({
    name: 'info',
    runner: info,
    builder: infoBuilder
  }),
  new Command({
    name: 'leavechannel',
    runner: leavechannel,
    builder: leavechannelBuilder
  }),
  new Command({
    name: 'createchannel',
    runner: createchannel,
    builder: createchannelBuilder
  }),
  new Command({
    name: 'uninviterole',
    runner: uninviterole,
    builder: uninviteroleBuilder
  }),
  new Command({
    name: 'uninvitemember',
    runner: uninvitemember,
    builder: uninvitememberBuilder
  }),
  new Command({
    name: 'invitechannel',
    runner: invitechannel,
    builder: invitechannelBuilder
  })
] as Command[]
